import multer from "multer";
import path from "path";
import { pool } from "../db.js";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const storageDocentes = multer.diskStorage({
//     destination: async (req, file, cb) => {
        
//         const destinationPath = path.resolve(__dirname, "../imagenes/docentes");
//         const jsonPath = JSON.stringify(destinationPath.replace(/\\/g, '\\\\')); // Reemplazar barras invertidas con barras diagonales dobles
//         const sql = `UPDATE infoDocentes SET imagen = '${jsonPath}' WHERE Identidad = '0301'`;
//         await pool.execute(sql);
        
//         //const jsonPath = JSON.stringify(destinationPath); // Convert to JSON string
//         //const sql = `UPDATE infoDocentes SET imagen = '${jsonPath}' WHERE Identidad = '0301'`;
        
//         //const sql = `UPDATE infodocentes SET imagen = "${destinationPath}" WHERE Identidad = "0301"`;

//         // INSERT INTO usuarios (nombre, imagenes) VALUES ('Usuario1', '{"imagen1": "/ruta/imagen1.jpg", "imagen2": "/ruta/imagen2.jpg"}');
       
//         // "C:\\Users\\Selusio\\Desktop\\PROYECTO ING SOFTWARE\\sprint1\\SP1\\mern-crud-auth2\\src\\imagenes\\docentes"
       
//         // await pool.execute(sql);

//         cb(null, destinationPath); 
//     },
//     filename: (req, file, cb) => {
//         const ext = file.originalname.split('.').pop();
//         cb(null,`${Date.now()}.${ext}`);
//     }
//  })

const storageDocentes = multer.diskStorage({
    destination: async (req, file, cb) => {
        const destinationPath = path.resolve(__dirname, "../imagenes/docentes");
        cb(null, destinationPath);
    },
    filename: async (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const fileName = `${Date.now()}.${ext}`;
        const filePath = path.join(__dirname, '../imagenes/docentes', fileName);

        // Guardar la ruta y el nombre del archivo en la columna 'imagen' de la base de datos
        const sql = `UPDATE infoDocentes SET imagen = JSON_OBJECT('ruta', ?) WHERE Identidad = '0301'`;
        await pool.execute(sql, [filePath]);

        cb(null, fileName);
    }
});

const storageAlumnos = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(__dirname);
        const destinationPath = path.resolve(__dirname, "../imagenes/alumnos");
        console.log(destinationPath);
        cb(null, destinationPath); 
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null,`${Date.now()}.${ext}`);
    }
})


const imageFilter = (req, file, cb) => {
    try {
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        const ext = path.extname(file.originalname).toLowerCase();
        if (allowedExtensions.includes(ext)) {
            cb(null, true); // Aceptar archivo
        } else {
            throw new Error('Solo se permiten archivos de imagen'); // Lanzar error
        }
    } catch (error) {
        cb(error); // Manejar el error usando el objeto cb
    }
};

export const subirImgDocentes = multer({storage: storageDocentes, fileFilter: imageFilter});

export const subirImgAlumnos = multer({storage: storageAlumnos, fileFilter: imageFilter});