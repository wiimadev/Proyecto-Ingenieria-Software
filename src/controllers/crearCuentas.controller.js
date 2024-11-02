import { pool } from "../db.js";
import fs from "fs";
import { es, faker } from "@faker-js/faker";
import moment from "moment";
import nodemailer  from "nodemailer"
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';



//---------GUARDAR EL CSV EN LA CARPETA CargarCsv-------------


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storageCsv = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.resolve(__dirname, "../CargaCsv");
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, `${file.originalname}`);
  }
});

export const upload = multer({ storage: storageCsv });
// ---------- FIN ALMACENAMIENTO CSV EN CARPETA CargarCsv--------

export const getEmployees = (req, res) => {
  res.send("creando alumnos");
};

// ------------------------------------------------------------------------------------------------------------------------------------>
//Generar contra

const generarContraseña = async () => {
    const c = Math.random().toString(36).slice(2) +
    Math.random().toString(36)
        .toUpperCase().slice(2);

    return c;
};

// enviar correo
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "admisionesunah2023@gmail.com",
    pass: "rqgcaypaycidwoni",
  },
});

transporter.verify().then(() => {
  console.log("Listo para enviar eMail");
  //console.log(estudiante);
});

const enviarCorreoPersonalizado = async (datos) => {

  const {
    correoPersonal,
    correoInstitucional,
    numeroCuenta,
    contraseña,
    carrera,
    fullName,
    centro

  } = datos;
  
  try {
    // Configura los detalles del correo
    const correo = {
      from: '"Bienvendio a la UNAH"  <admisionesunah2023@gmail.com>',
      to: correoPersonal,
      subject: "Bienvendio a la UNAH  ",
      html: `
      <h1>Hola, estimado estudiante ${fullName} </h1>
      <p>Es un placer comunicarle que usted ha sido admitido en la UNAH en la carrera   ${carrera}</p>
      <p>Su centro de estudio es : ${centro} </p>
      <p>Su numero de cuenta es: ${numeroCuenta} </p>
      <p>Su correo universitario es: ${correoInstitucional}</p>
      <p>Su contraseña por defecto es: ${contraseña}</p>
      <br/>

      <p>Se le informa que su contraseña es una contraseña generica por lo cual debera hacer el cambio de la misma</p>
  
      <p>Atentamente Admisiones Ciudad Universitaria, Tegucigalpa</p>

      <button
      className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
      type="submit">
      LOGIN ESTUDIANTES
    </button>

    `,
    };

    // Envía el correo
    const info = await transporter.sendMail(correo);
    console.log("Correo enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

// ------------------------------------------------------------------------------------------------------------------------------------>
// Función para generar un correo único para el estudiante
async function generarCorreoUnico(estudiante) {
  let fName = estudiante[0].toLowerCase();
  let lName = estudiante[2].toLowerCase();

  let correo = faker.internet.email({
    firstName: fName,
    lastName: lName,
    provider: "unah.hn",

  });

  while (true) {
    const sql = `SELECT * FROM usuarios WHERE CorreoInstitucional = ?`;
    const [rows] = await pool.execute(sql, [correo]);

    if (rows.length === 0) {
      return correo; // El correo es único, devolver el correo generado
    }

    correo = faker.internet.email({
      firstName: fName,
      lastName: lName,
      provider: "unah.hn",
    });
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------>
// Generar número aleatorio de 7 cifras
function generarNumeroAleatorio() {
  const numero = Math.floor(1000000 + Math.random() * 9000000);
  return numero.toString();
}

// ------------------------------------------------------------------------------------------------------------------------------------>
// Generar número de cuenta
async function generarNumeroDeCuenta() {
  const anioActual = moment().format("YYYY");
  const numeroAleatorio = generarNumeroAleatorio();
  const numeroCuenta = anioActual + numeroAleatorio;
  while (true) {
    const sql = `SELECT * FROM usuarios WHERE CorreoInstitucional = ?`;
    const [rows] = await pool.execute(sql, [numeroCuenta]);

    if (rows.length === 0) {
      return numeroCuenta; // El correo es único, devolver el correo generado
    }

    const anioActual = moment().format("YYYY");
    const numeroAleatorio = generarNumeroAleatorio();

    numeroCuenta = anioActual + numeroAleatorio;
  }
}

// ------------------------------------------------------------------------------------------------------------------------------------>
// Insertar alumnos en BD
async function insertarCorreoEnDB(datos) {
  //const data = datos;
  const {
    fullName,
    identidad,
    carrera,
    direccion,
    correoPersonal,
    centro,
    correoInstitucional,
    numeroCuenta,
    contraseña
  } = datos;
  const sql = `INSERT INTO infoalumno (Identidad, NumeroCuenta, fullName, Carrera, Direccion, CorreoPersonal, Centro) 
  VALUES ("${identidad}", 
  "${numeroCuenta}", 
  "${fullName}",  
  "${carrera}", 
  "${direccion}", 
  "${correoPersonal}", 
  "${centro}")`;

  const sql2 = `INSERT INTO usuarios (CorreoInstitucional, Contrasena, tipoUsuario, NumeroCuenta ) VALUES ("${correoInstitucional}", "${contraseña}", "Estudiante", "${numeroCuenta}" )`
  
  //const sql = `INSERT INTO alumnos VALUES (2, "${fullName}", "${identidad}", "${carrera}", "${direccion}", "${correoPersonal}", "${centro}", "${correoInstitucional}", "${numeroCuenta}", "${contraseña}")`;
  await pool.execute(sql);
  await pool.execute(sql2);
  await enviarCorreoPersonalizado(datos);
}




// ------------------------------------------------------------------------------------------------------------------------------------>
// Controlador de /crear
export const crear = async (req, res) => {
  const estudiantes = req.body; // Obtener el array de objetos estudiantes enviados en la petición POST

  console.log(estudiantes);

  try {
    const correos = [];
    const cuentas = [];
    var estudiante 
   
    

    for ( estudiante of estudiantes) {
      const { fullName, id, carrera, direccion, email, centro } = estudiante; //desestructuracion de cada objeto estudiante
      
      console.log(fullName);

      if (id.length < 13) {

        
        console.log(`La identidad ${id} del estudiante ${fullName} tiene una longitud menor a 13 caracteres. No se permite guardar.`);
        continue; // Pasar al siguiente estudiante sin crearlo
      }

    const sql1 = `SELECT * FROM infoalumno WHERE Identidad = ?`;
    const [existeEstudiante] = await pool.execute(sql1, [id]);
    if (existeEstudiante.length > 0) {
      const mensajeError = `El estudiante con identidad ${id} ya existe en la base de datos.`;
      console.log(mensajeError);
      return res.status(400).json({ error: true, mensaje: mensajeError });
    }
      
      

      let array = fullName.split(" "); //Guardar las partes del nombre en un arreglo

      const correo = await generarCorreoUnico(array); //Aqui se llaman a las funciones que generan los datos aleatorios
      const cuenta = await generarNumeroDeCuenta();
      const contraseña = await generarContraseña();

      let datos = {
        fullName: `${fullName}`,
        identidad: `${id}`,
        carrera: `${carrera}`,
        direccion: `${direccion}`,
        correoPersonal: `${email}`,
        centro: `${centro}`,
        correoInstitucional: `${correo}`,
        numeroCuenta: `${cuenta}`,
        contraseña: `${contraseña}`
      };

      await insertarCorreoEnDB(datos);
      correos.push(correo);
      cuentas.push(cuenta);
    }





    

    // Aquí puedes realizar las acciones adicionales con los estudiantes y los correos generados
    res.json({ correos: correos, cuentas: cuentas });
   
  } catch (error) {
    console.error("Error al generar los correos:", error);
    res.status(500).json({ error: "Error al generar los correos" });

  }

};
// ...

export const guardarArchivo = async (req, res) => {
  try {
    // Utiliza el middleware upload.single('file') para manejar el archivo
    upload.single('file')(req, res, async (err) => {
      if (err) {
        console.error("Error al subir el archivo:", err);
        return res.status(500).json({ error: "Error al subir el archivo" });
      }

      // El archivo se ha subido con éxito, puedes acceder a él a través de req.file
      if (!req.file) {
        return res.status(400).json({ error: "No se encontró ningún archivo" });
      }

      console.log("Archivo guardado:", req.file);
      return res.sendStatus(200);
    });
  } catch (error) {
    console.error("Error al guardar el archivo:", error);
    res.status(500).json({ error: "Error al guardar el archivo" });
  }
};



  







