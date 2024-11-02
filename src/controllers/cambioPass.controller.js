import { pool } from "../db.js";

export const cambiarPass = async (req, res) => {
  
    
    const { correo, contraseña, nuevaContraseña } = req.body;
  
    
    try {
   
      // Verificar si las propiedades requeridas existen y no son undefined
      if (correo && contraseña && nuevaContraseña) {
  
       
        // Realizar la consulta a la base de datos para verificar las credenciales actuales
        const sql = "SELECT * FROM usuarios WHERE CorreoInstitucional = ? AND Contrasena = ?";
        const [rows] = await pool.execute(sql, [correo, contraseña]);
  
        if (rows.length === 1) {
          // Las credenciales actuales son correctas, actualizar la contraseña
          const updateSql = "UPDATE usuarios SET Contrasena = ? WHERE CorreoInstitucional = ?";
          await pool.execute(updateSql, [nuevaContraseña, correo]);
  
          res
            .status(200)
            .json({ message: "Contraseña actualizada exitosamente", success: true });
        } else {
          // Las credenciales actuales son inválidas
          res.status(401).json({ message: "Credenciales actuales inválidas", success: false });
        }
      } else {
        // Propiedades faltantes o undefined
        res.status(400).json({ message: "Datos inválidos", success: false });
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      res.status(500).json({ message: "Error al cambiar la contraseña",success: false  });
    }
  };

  