// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useGenerarCuentas } from "../context/generarCuentasContext";
// import csv from 'csvtojson';


// const FileUploadForm = () => {



//   const validateFile = (file) => {
//     const allowedExtensions = ["csv"];
//     const fileExtension = file.name.split(".").pop().toLowerCase();
//     if (!allowedExtensions.includes(fileExtension)) {
//       return "Solo se permite subir archivos con extensión .csv";
//     }
//     return null;
//   };


//   const { createCuentas } = useGenerarCuentas();
//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//     const file = data.file[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const fileContent = event.target.result;
//         const jsonArray = await csv().fromString(fileContent);

//         console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

//         const d = await createCuentas(jsonArray);

//         // ... Haz algo con el arreglo de objetos JSON
//       };

//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>

//     <form onSubmit={handleSubmit(onSubmit)}  className="mt-10 mx-auto bg-slate-300 max-w-sm rounded-md p-4">
//       <h1 className="text-xl font-bold uppercase text-center text-black">
//                 Cargar Archivo
//               </h1>
//               <label className="block">Subir el archivo aquí:</label>
      
//       <input type="file" {...register('file')}   
//        className="px-2 py-1 my-1 rounded-sm w-full"
       
//        onChange={(event) => {
//         const file = event.currentTarget.files[0];
//         const errorMessage = validateFile(file);
//         setFieldValue("archivo", file);
//         setFieldValue("error", errorMessage);
//       }}
       
//         />
//       <button className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
//                  type="submit"   >
                  
                  
                  
//                   Enviar
             
//         </button>
//     </form>

//     </div>
//   );
// };

// export default FileUploadForm;



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useGenerarCuentas } from "../context/generarCuentasContext";
// import csv from 'csvtojson';
// import { useState } from 'react';

// const FileUploadForm = () => {
//   const { createCuentas } = useGenerarCuentas();
//   const { register, handleSubmit } = useForm();
//   const [alerta, setAlerta] = useState(null);

//   const onSubmit = async (data) => {
//     const file = data.file[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const fileContent = event.target.result;
//         const jsonArray = await csv().fromString(fileContent);

//         console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

//         const response = await createCuentas(jsonArray);


//         if (response.error) {
//           setAlerta(response.error); // Mostrar la alerta si hay un error
//         } else {
//           setAlerta(null); // Limpiar la alerta si no hay error
//         }
//         // ... Haz algo con el arreglo de objetos JSON
//       };

//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mx-auto bg-slate-300 max-w-sm rounded-md p-4" enctype="multipart/form-data">
//         <h1 className="text-xl font-bold uppercase text-center text-black">
//           Cargar Archivo
//         </h1>
//         <label className="block">Subir el archivo aquí:</label>
//         <input
//           type="file"
//           {...register('file')}
//           className="px-2 py-1 my-1 rounded-sm w-full"
//         />
//         <button
//           className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
//           type="submit"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FileUploadForm;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useGenerarCuentas } from "../context/generarCuentasContext";
// import csv from 'csvtojson';
// import { useState } from 'react';

// const FileUploadForm = () => {
//   const { createCuentas } = useGenerarCuentas();
//   const { register, handleSubmit } = useForm();
//   const [alerta, setAlerta] = useState(null);

//   const onSubmit = async (data) => {
//     const file = data.file[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const fileContent = event.target.result;
//         const jsonArray = await csv().fromString(fileContent);

//         console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

//         const response = await createCuentas(jsonArray);

//         if (response.error) {
//           setAlerta(response.error); // Mostrar la alerta si hay un error
//         } else {
//           setAlerta(null); // Limpiar la alerta si no hay error
//         }

//         // ... Haz algo con el arreglo de objetos JSON
//       };

//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="mt-10 mx-auto bg-slate-300 max-w-sm rounded-md p-4" enctype="multipart/form-data">
//         <h1 className="text-xl font-bold uppercase text-center text-black">
//           Cargar Archivo
//         </h1>
//         {/* Mostrar la alerta si existe */}
//         {alerta && (
//           <div className="bg-red-500 text-white px-4 py-2 my-2 rounded">
//             {alerta}
//           </div>
//         )}
//         <label className="block">Subir el archivo aquí:</label>
//         <input
//           type="file"
//           {...register('file')}
//           className="px-2 py-1 my-1 rounded-sm w-full"
//         />
//         <button
//           className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
//           type="submit"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FileUploadForm;

//     

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useGenerarCuentas } from "../context/generarCuentasContext";
// import { Card, Message, Button, Input, Label } from "../components/ui";
// import csv from "csvtojson";

// const FileUploadForm = () => {
//   const validateFile = (file) => {
//     const allowedExtensions = ["csv"];
//     const fileExtension = file.name.split(".").pop().toLowerCase();
//     if (!allowedExtensions.includes(fileExtension)) {
//       return "Solo se permite subir archivos con extensión .csv";
//     }
//     return null;
//   };

//   const { createCuentas } = useGenerarCuentas();
//   const { register, handleSubmit } = useForm();
//   const [errorMessage, setErrorMessage] = useState("");

//   const onSubmit = async (data) => {
//     const file = data.file[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const fileContent = event.target.result;
//         const jsonArray = await csv().fromString(fileContent);

//         console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

//         const d = await createCuentas(jsonArray);

//         // ... Haz algo con el arreglo de objetos JSON
//       };

//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mt-10 mx-auto bg-blue-300 border-2 border-blue-700 max-w-sm rounded-md p-4"
//       >
//         <h1 className="text-3xl font-bold text-center text-black">
//           Cargar Archivo
//         </h1>
//         <Label>Subir Archivo Aqui:</Label>

//         <input
//           type="file"
//           {...register('file')}
//           className="px-2 py-1 my-1 rounded-sm w-full text-cyan-950"
//           onChange={(event) => {
//             const file = event.currentTarget.files[0];
//             const errorMessage = validateFile(file);
//             setFieldValue("archivo", file);
//             setFieldValue("error", errorMessage);
//           }}
//         />
        
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        
//         <button
//           className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
//           type="submit"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FileUploadForm;
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useGenerarCuentas } from "../context/generarCuentasContext";
// import { Card, Message, Button, Input, Label } from "../components/ui";
// import csv from "csvtojson";

// const FileUploadForm = () => {
//   const { createCuentas } = useGenerarCuentas();
//   const { register, handleSubmit, setError, formState: { errors } } = useForm();

//   const validateFile = (file) => {
//     const allowedExtensions = ["csv"];
//     const fileExtension = file.name.split(".").pop().toLowerCase();
//     if (!allowedExtensions.includes(fileExtension)) {
//       setError("file", {
//         type: "manual",
//         message: "Solo se permite subir archivos con extensión .csv",
//       });
//       return false;
//     }
//     return true;
//   };

//   const onSubmit = async (data) => {
//     const file = data.file[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const fileContent = event.target.result;
//         const jsonArray = await csv().fromString(fileContent);

//         console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

//         const d = await createCuentas(jsonArray);

//         // ... Haz algo con el arreglo de objetos JSON
//       };

//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mt-10 mx-auto bg-blue-300 border-2 border-blue-700 max-w-sm rounded-md p-4"
//       >
//         <h1 className="text-3xl font-bold text-center text-black">
//           Cargar Archivo
//         </h1>
//         <Label>Subir Archivo Aqui:</Label>

//         <input
//           type="file"
//           {...register("file")}
//           className="px-2 py-1 my-1 rounded-sm w-full text-cyan-950"
//           onChange={(event) => {
//             const file = event.currentTarget.files[0];
//             validateFile(file);
//           }}
//         />
        
//         {errors.file && (
//           <p className="text-red-500">{errors.file.message}</p>
//         )}
        
//         <button
//           className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
//           type="submit"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FileUploadForm;
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useGenerarCuentas } from "../context/generarCuentasContext";
// import { Card, Message, Button, Input, Label } from "../components/ui";
// import csv from "csvtojson";

// const FileUploadForm = () => {
//   const { createCuentas } = useGenerarCuentas();
//   const { register, handleSubmit, setError, formState: { errors } } = useForm();

//   const validateFile = (file) => {
//     const allowedExtensions = ["csv"];
//     const fileExtension = file.name.split(".").pop().toLowerCase();
//     if (!allowedExtensions.includes(fileExtension)) {
//       setError("file", {
//         type: "manual",
//         message: "Solo se permite subir archivos con extensión .csv",
//       });
//       return false;
//     }
//     return true;
//   };

//   const onSubmit = async (data) => {
//     const file = data.file[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (event) => {
//         const fileContent = event.target.result;
//         const jsonArray = await csv().fromString(fileContent);

//         console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

//         const d = await createCuentas(jsonArray);

//         // ... Haz algo con el arreglo de objetos JSON
//       };

//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div>

      
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="mt-10 mx-auto bg-blue-300 border-2 border-blue-700 max-w-sm rounded-md p-4"
//       >
//         <h1 className="text-3xl font-bold text-center text-black">
//           Cargar Archivo
//         </h1>
//         <Label>Subir Archivo Aqui:</Label>

//         <input
//           type="file"
//           {...register("file")}
//           className="px-2 py-1 my-1 rounded-sm w-full text-cyan-950"
//           onChange={(event) => {
//             const file = event.currentTarget.files[0];
//             validateFile(file);
//           }}
//         />
        
//         {errors.file && (
//           <p className="text-red-500">{errors.file.message}</p>
//         )}
        
//         <button
//           className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
//           type="submit"
//         >
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FileUploadForm;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGenerarCuentas } from "../context/generarCuentasContext";
import { Label } from "../components/ui";
import csv from "csvtojson";

const FileUploadForm = () => {
  const { createCuentas } = useGenerarCuentas();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [backendError, setBackendError] = useState("");

  const validateFile = (file) => {
    const allowedExtensions = ["csv"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setError("file", {
        type: "manual",
        message: "Solo se permite subir archivos con extensión .csv",
      });
      return false;
    }
    return true;
  };

  const onSubmit = async (data) => {
    const file = data.file[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const fileContent = event.target.result;
        const jsonArray = await csv().fromString(fileContent);

        console.log(jsonArray); // Aquí tienes el arreglo de objetos JSON

        const response = await createCuentas(jsonArray);

        if (response.error) {
          setBackendError(response.mensaje);
        } else {
          // ... Haz algo con el arreglo de objetos JSON
        }
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 mx-auto bg-blue-300 border-2 border-blue-700 max-w-sm rounded-md p-4"
        encType="multipart/form-data" 
      >
        <h1 className="text-3xl font-bold text-center text-black">
          Cargar Archivo
        </h1>
        <Label>Subir Archivo Aquí:</Label>

        <input
          type="file"
          {...register("file")}
          className="px-2 py-1 my-1 rounded-sm w-full text-cyan-950"
          onChange={(event) => {
            const file = event.currentTarget.files[0];
            validateFile(file);
          }}
        />

        {errors.file && (
          <p className="text-red-500">{errors.file.message}</p>
        )}

        <button
          className="my-2 block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
          type="submit"
        >
          Enviar
        </button>

        {backendError && (
          <div className="text-red-500">{backendError}</div>
        )}
      </form>
    </div>
  );
};

export default FileUploadForm;




