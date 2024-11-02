//import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";
import { pool } from "../db.js";

export const login = async (req, res) => {
  console.log(req.body);


  try {
    console.log(req.body);
    
    const email = req.body.email;
    const password = req.body.password;
    

    console.log(req.body);
    const sql =
      "SELECT * FROM usuarios WHERE CorreoInstitucional = ? OR Contrasena = ?";
    const [rows] = await pool.execute(sql, [email, password]);

    const dato = rows[0];
   

    // let { Contrasena, NumeroCuenta, CorreoInstitucional,  idEmpleado, tipoUsuario} = dato;
    const userFound = rows.length > 0 ? true : false;

    //validar
    


    if (!userFound)
      return res.status(400).json({
        message: ["CREDENCIALES INVALIDAS"],
      });


     

    let { Contrasena, NumeroCuenta, CorreoInstitucional,  idEmpleado, tipoUsuario} = dato;

    



    // CONDICION QUE DETERMINA SI ES UN ESTUDIANTE O SI ES UN DOCENTE 
    if (NumeroCuenta != null){
      
      let cuentaEstudiante = NumeroCuenta
      console.log(cuentaEstudiante)
     const sql1 = "SELECT * FROM infoAlumno WHERE NumeroCuenta = ? ";
      const [rowsEstudiante] = await pool.execute(sql1, [cuentaEstudiante]);

  

      const datos = rowsEstudiante[0];

    let {NumeroCuenta: NumeroCuentaEstudiante, CorreoInstitucional, fullName, Centro, Carrera} = datos;

        console.log(idEmpleado)
      if (!userFound)
      return res.status(400).json({
        message: ["CORREO INCORRECTO"],
      });

  //const isMatch = await bcrypt.compare(password, Contrasena);
    const isMatch = password === Contrasena;
  
    if (!isMatch) {
      return res.status(400).json({
        message: ["CONTRASEÑA INCORRECTA"],
      });
    }

    const token = await createAccessToken({
      id: NumeroCuentaEstudiante,
      username: CorreoInstitucional,
    

    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      message: "CREDENCIALES ESTUDIANTE",
      id: NumeroCuentaEstudiante,
      username: fullName,
      email: CorreoInstitucional,
      Centro: Centro,
      Carrera: Carrera,
      tipo: tipoUsuario
    
    });
 
    } // fin if
     else {  
      /* 
       * DETERMINA Y VERIFICA EL DOCENTE DE LA TABLA DE USUARIOS Y EXTRA SU INFO GENERAL DE INFO
      */
      const sql2 = "SELECT * FROM infoDocentes WHERE idEmpleado = ? ";
      const [rowsDocente] = await pool.execute(sql2, [idEmpleado]);

      if (rowsDocente.length === 0) {
        return res.status(400).json({
          message: ["No se pudo encontrar la información del empleado"],
        });
      }

      const datos2 = rowsDocente[0];
      let { fullName, Centro, Titulo} = datos2;

    if (!userFound)
    return res.status(400).json({
      message: ["The email does not exist"],
    });

  //const isMatch = await bcrypt.compare(password, Contrasena);
  const isMatch = password === Contrasena;
  
  if (!isMatch) {
    return res.status(400).json({
      message: ["Credenciales Invalidas"],
    });
  }

  const token = await createAccessToken({
    id: idEmpleado,
    username: CorreoInstitucional,
  

  });

  res.cookie("token", token, {
    httpOnly: process.env.NODE_ENV !== "development",
    secure: true,
    sameSite: "none",
  });

  res.json({
    message: "CREDENCIALES DOCENTE",
    id: idEmpleado,
    username: fullName,
    email: CorreoInstitucional,
    Centro: Centro,
    Titulo: Titulo,
    tipo: tipoUsuario
  });

      
     } 
    

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    //const userFound = await User.findById(user.id);

    const sql = "SELECT * FROM usuarios WHERE NumeroCuenta = ? ";
    const [userFound] = await pool.execute(sql, [user.id]);

    const dato = userFound[0];
    let {  NumeroCuenta, CorreoInstitucional, fullName , Centro, Carrera, tipoUsuario} = dato;

    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: NumeroCuenta,
      email: CorreoInstitucional,
      Centro: Centro,
      tipo: tipoUsuario,
      carrera : Carrera,
      username: fullName


    });
  });
};


// export const cambiarPass = async (req, res) => {
//   console.log("llega aqui algo")
  
//   const { correo, contraseña, nuevaContraseña } = req.body;

//   console.log("llega aqui algo 2")
  
  
//   try {
//     console.log("llega aqui algo3")
//     // Verificar si las propiedades requeridas existen y no son undefined
//     if (correo && contraseña && nuevaContraseña) {

//       console.log("llega aqui algo4")
//       // Realizar la consulta a la base de datos para verificar las credenciales actuales
//       const sql = "SELECT * FROM usuarios WHERE CorreoInstitucional = ? AND Contrasena = ?";
//       const [rows] = await pool.execute(sql, [correo, contraseña]);

//       if (rows.length === 1) {
//         // Las credenciales actuales son correctas, actualizar la contraseña
//         const updateSql = "UPDATE usuarios SET Contrasena = ? WHERE CorreoInstitucional = ?";
//         await pool.execute(updateSql, [nuevaContraseña, correo]);

//         res
//           .status(200)
//           .json({ message: "Contraseña actualizada exitosamente" });
//       } else {
//         // Las credenciales actuales son inválidas
//         res.status(401).json({ message: "Credenciales actuales inválidas" });
//       }
//     } else {
//       // Propiedades faltantes o undefined
//       res.status(400).json({ message: "Datos inválidos" });
//     }
//   } catch (error) {
//     console.error("Error al cambiar la contraseña:", error);
//     res.status(500).json({ error: "Error al cambiar la contraseña" });
//   }
// };



