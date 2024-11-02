
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { useCambioContra } from '../context/cambioContraContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Label, Button } from '../components/ui';

const RestablecerContra = () => {
  const { createCambioContra } = useCambioContra();
  const { register, handleSubmit, reset } = useForm();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const onSubmit = async (data) => {
    try {
      const cambioContra = data;
      const res = await createCambioContra(cambioContra);

      if (res.success) {
        setAlertMessage('Contraseña actualizada exitosamente');
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
      setAlertMessage('Error al cambiar la contraseña');
      setAlertType('error');
      // Mostrar la alerta utilizando Toastify
      toast('Error al cambiar la contraseña', { autoClose: 3000, type: 'error' });
    }
  };

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold text-center text-cyan-950">Restablecer Contraseña</h1>
        <br />
        <Label htmlFor="username">Correo Institucional:</Label>
        <div className="relative">
          <Input
            type="text"
            placeholder="Ingrese su correo institucional."
            {...register('correo')}
            autoFocus
          />
          <FontAwesomeIcon icon={faEnvelope} size="xl" className="absolute left-3 top-2 text-blue-700" />
        </div>
        <br />
        <Label htmlFor="password text-3xl">Contraseña actual:</Label>
        <div className="relative">
          <Input
            type="password"
            placeholder="Ingrese su contraseña actual."
            {...register('contraseña')}
            autoFocus
          />
          <FontAwesomeIcon icon={faKey} size="xl" className="absolute left-3 top-2 text-blue-700" />
        </div>
        <br />
        <Label htmlFor="confirmPassword">Contraseña nueva:</Label>
        <div className="relative">
          <Input
            type="password"
            placeholder="Ingrese su nueva contraseña."
            {...register('nuevaContraseña')}
            autoFocus
          />
          <FontAwesomeIcon icon={faKey} size="xl" className="absolute left-3 top-2 text-blue-700" />
        </div>
        <br />
        <Button>Confirmar</Button>
      </form>
      {/* Mostrar la alerta utilizando ToastContainer */}
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
  );
};

export default RestablecerContra;
