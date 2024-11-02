
/****
 * METODO PARA CREAR DOCENTE
 * LEE UN ARCHIVO CSV, INGRESA SUS DATOS GENERALES A TABLA infodocentes
 * CREA SU USUARIO Y CONTRASENIA AUTOMATICO
 * ENVIA UN CORREO AL CORREO PERSONAL CON SUS CREDENCIALES
 */


import { pool } from "../db.js";
import fs from "fs";
import { es, faker } from "@faker-js/faker";
import moment from "moment";
import nodemailer  from "nodemailer"

export const getEmployees = (req, res) => {
  res.send("creando DOCENTE");
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
  console.log("Listo para enviar eMail a Docentes");
  //console.log(estudiante);
});

const enviarCorreoPersonalizado = async (datos) => {

  const {
    correoPersonal,
    correoInstitucional,
    numeroCuenta,
    contraseña,
    fullName,
    centro

  } = datos;
  
  try {
    // Configura los detalles del correo
    const correo = {
      from: '"UNIVERSIDAD NACIONAL AUTONOMA DE HONDURAS"  <admisionesunah2023@gmail.com>',
      to: correoPersonal,
      subject: "Bienvendio a la UNAH  ",
      html: `
      <h1>Hola, estimado docente ${fullName} </h1>
      <p>Es un placer darle la bienvenida a la Universidad Nacional Autonoma de Honduras</p>
      <p>Su centro de trabajo es: ${centro} </p>
      <p>Su numero de cuenta de docente es: ${numeroCuenta} </p>
      <p>Su correo universitario es: ${correoInstitucional}</p>
      <p>Su contraseña por defecto es: ${contraseña}</p>
      <br/>

      <p>Se le informa que su contraseña es una contraseña generica por lo cual debera hacer el cambio de la misma</p>
  
      <p>Atentamente Admisiones Ciudad Universitaria, Tegucigalpa</p>

      <button
      className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
      type="submit">
      INICIAR SESION DOCENTE
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
// Función para generar un correo único para el docente
async function generarCorreoUnico(docente) {
  let fName = docente[0].toLowerCase();
  let lName = docente[2].toLowerCase();

  let correo = faker.internet.email({
    firstName: fName,
    lastName: lName,
    provider: "unah.edu.hn",

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
      provider: "unah.edu.hn",
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
    titulo,
    direccion,
    correoPersonal,
    centro,
    correoInstitucional,
    numeroCuenta,
    contraseña,
    tipousuario
  } = datos;
  const sql = `INSERT INTO infodocentes (Identidad, idEmpleado, fullName, titulo, Direccion, CorreoPersonal, Centro) 
  VALUES ("${identidad}", 
  "${numeroCuenta}", 
  "${fullName}",  
  "${titulo}", 
  "${direccion}", 
  "${correoPersonal}", 
  "${centro}")`;

  const sql2 = `INSERT INTO usuarios (CorreoInstitucional, Contrasena, tipoUsuario, idEmpleado ) VALUES ("${correoInstitucional}", "${contraseña}", "${tipousuario}", "${numeroCuenta}" )`
  
  //const sql = `INSERT INTO alumnos VALUES (2, "${fullName}", "${identidad}", "${titulo}", "${direccion}", "${correoPersonal}", "${centro}", "${correoInstitucional}", "${numeroCuenta}", "${contraseña}")`;
  await pool.execute(sql);
  await pool.execute(sql2);
  await enviarCorreoPersonalizado(datos);
}

// ------------------------------------------------------------------------------------------------------------------------------------>
// Controlador de /crear
export const crear = async (req, res) => {
  const docentes = req.body; // Obtener el array de objetos docentes enviados en la petición POST

  console.log(docentes);

 

  try {
    const correos = [];
    const cuentas = [];
    var docente 

    
    for ( docente of docentes) {
      const { fullName, id, titulo, direccion, email, centro, tipousuario  } = docente; //desestructuracion de cada objeto docente
      
      console.log(fullName);

      if (id.length < 13) {
        console.log(`La identidad ${id} del docente ${fullName} tiene una longitud menor a 13 caracteres. No se permite guardar.`);
        res
        .status(401)
        .json({ message: `La identidad ${id} del docente ${fullName} tiene una longitud menor a 13 caracteres. No se permite guardar.`, success: false });
        continue; // Pasar al siguiente docente sin crearlo
      }

    const sql1 = `SELECT * FROM infodocentes WHERE Identidad = ?`;
    const [existedocente] = await pool.execute(sql1, [id]);
      if (existedocente.length > 0  ) {
        console.log(`El docente con identidad ${id} ya existe en la base de datos.`);
        res
        .status(401)
        .json({ message: `El docente con identidad ${id} ya existe en la base de datos.`, success: false });
        continue; // Pasar al siguiente docente sin crearlo
      }


      let array = fullName.split(" "); //Guardar las partes del nombre en un arreglo

      const correo = await generarCorreoUnico(array); //Aqui se llaman a las funciones que generan los datos aleatorios
      const cuenta = await generarNumeroDeCuenta();
      const contraseña = await generarContraseña();

      let datos = {
        fullName: `${fullName}`,
        identidad: `${id}`,
        titulo: `${titulo}`,
        direccion: `${direccion}`,
        correoPersonal: `${email}`,
        centro: `${centro}`,
        correoInstitucional: `${correo}`,
        numeroCuenta: `${cuenta}`,
        contraseña: `${contraseña}`,
        tipousuario : `${tipousuario}`
      };

      await insertarCorreoEnDB(datos);
      correos.push(correo);
      cuentas.push(cuenta);
    }

    // Aquí puedes realizar las acciones adicionales con los docentes y los correos generados
    // res.json({ correos: correos, cuentas: cuentas });
    res
    .status(200)
    .json({ message: "Docente creado con exito", success: true });
  } catch (error) {
    // console.error("Error al generar los correos:", error);
    // res.status(500).json({ error: "Error al generar los correos" });
  }
};
