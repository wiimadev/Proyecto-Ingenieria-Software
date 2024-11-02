import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDocentes } from '../context/docenteContext';
import { useForm } from "react-hook-form";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey , faHome, faGraduationCap, faFingerprint, faSchool, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';


const AgregarDocenteFormulario = () => {
 
  const { createDocentes } = useDocentes();
  const { register, handleSubmit, reset } = useForm();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  
  const onSubmit = async (data) => {
    const docentes = [data];
    try {
      const res = await createDocentes(docentes);

      if (res.success) {
        setAlertMessage('Docentes guardado exitosamente');
        setAlertType('success');
        reset(); // Limpiar los campos del formulario
      } else {
        setAlertMessage(res.message);
        setAlertType('error');
      }

      // Mostrar la alerta utilizando Toastify5
      toast(res.message, { autoClose: 3000, type: res.success ? 'success' : 'error' });
    } catch (error) {
      console.error(error);
      setAlertMessage('Error al guardar el docente');
      setAlertType('error');
      // Mostrar la alerta utilizando Toastify
      toast('Error al guardar el docente', { autoClose: 3000, type: 'error' });
    }
  };

  
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 rounded-md">
      
       
        
      <div className='bg-blue-300 w-4/6 p-10 rounded-md space-y-7 border-2 border-blue-700'>
          <h1 className="text-3xl font-bold text-center text-cyan-950">
          Agregar Docentes
        </h1>
        <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
          <Label htmlFor="username">Nombre Completo:</Label>

          <div className="relative">
            <Input
              type="text"
              name="username"
              FontAwesomeIcon="faEnvelope"
              placeholder="Escriba su nombre completo"
              {...register("fullName", { required: true })}
              autoFocus
            />
            <FontAwesomeIcon
              icon={faFileSignature}
              size="xl"
              className="absolute left-3 top-2 text-blue-700"
            />
            
          </div>
          </div>
          <div>

          <Label htmlFor="password text-3xl">Identidad:</Label>

          <div className="relative">
            <Input
              type="text"
              name="id"
              placeholder="Ingrese su numero de identidad"
              {...register("id", { required: true })}
            />
            <FontAwesomeIcon
              icon={faFingerprint}
              size="xl"
              className="absolute left-3 top-2 text-blue-700"
            />
           
          </div>
          </div>
          <div>

          <Label htmlFor="confirmPassword">Centro:</Label>

          <div className="relative">
            <Input
              type="text"
              name="newPassword"
              placeholder=" Ingrese el centro"
              {...register("centro", { required: true })}
            />
            <FontAwesomeIcon
              icon={faSchool}
              size="xl"
              className="absolute left-3 top-2 text-blue-700"
            />
           
          </div>
          </div>
          <div>

          <Label htmlFor="confirmPassword">Correo Personal:</Label>

        <div className="relative">
        <Input
            type="email"
            name="confirmPassword"
            placeholder="ejem. ejemplo@gmail.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="absolute left-3 top-2 text-blue-800"
            />
          
        </div>
        </div>
        <div>

        <Label htmlFor="confirmPassword">Título Universitario:</Label>

        <div className="relative">
        <Input
            type="text"
            name="confirmPassword"
            placeholder=" Ingrese su título universitario obtenido"
            {...register("titulo",  { required: true })}
          />
          <FontAwesomeIcon
              icon={faGraduationCap}
              size="xl"
              className="absolute left-3 top-2 text-blue-800"
            />
          
        </div>
        </div>
        <div>
        <Label htmlFor="direccion">Dirección:</Label>

        <div className="relative">
        <Input
            type="text"
            name="direccion"
            placeholder="Ingrese su dirección"
            {...register("direccion",  { required: true })}
          />
          <FontAwesomeIcon
              icon={faHome}
              size="xl"
              className="absolute left-3 top-2 text-blue-800"
            />
          
        </div>
        </div>
        <div>
        <Label htmlFor="comboBox" >Usuario:</Label>
           <select id="comboBox" {...register("tipousuario", { required: true })} className='block appearance-none w-50 bg-blue-500 border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
             <option value="" className='text-gray-700 mt-2'>-- Seleccione --</option>
             <option value="Docente" className='text-gray-700 mt-2'>Docente</option>
             <option value="Jefe de Departamento" className='text-gray-700 mt-2'>Jefe de Departamento</option>
             <option value="Coordinador" className='text-gray-700 mt-2'>Coordinador</option>
             <option value="Administrador" className='text-gray-700 mt-2'>Administrador</option>
           </select>
           </div>

          <br>
          </br>
                             <center> <Button>Confirmar</Button> </center> 
        </form> 
       
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
       
        </div>
      
    </div>
  );
};

export default AgregarDocenteFormulario;