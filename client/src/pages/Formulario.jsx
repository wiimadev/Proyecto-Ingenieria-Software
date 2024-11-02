import React, { useState } from 'react';
import '../assets/formulario-style.css';

const Formulario = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('api/cambiarContra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña, nuevaContraseña }),
      });

      if (response.ok) {
        // Contraseña cambiada exitosamente
        alert('Contraseña cambiada exitosamente');
      } else if (response.status === 401) {
        // Credenciales actuales inválidas
        alert('Credenciales actuales inválidas');
      } else if (response.status === 400) {
        // Datos inválidos
        alert('Datos inválidos');
      } else {
        // Error al cambiar la contraseña
        alert('Error al cambiar la contraseña');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      alert('Error al cambiar la contraseña');
      console.log(error)
    }
  };

  return (
    <div className="formulario">
      <br />
      <form onSubmit={handleSubmit} className="form">
        <h1 className="titulo">Cambio de Clave</h1>
        <label className="texto">Correo Institucicional</label>
        <input
          type="email"
          placeholder="Ingrese su correo institucional"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label className="texto">Contraseña</label>
        <input
  type="password"
  placeholder="Ingrese su contraseña actual"
  value={contraseña}
  onChange={(e) => setContraseña(e.target.value)}
/>
        <label className="texto">Nueva Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese su nueva contraseña"
          value={nuevaContraseña}
          onChange={(e) => setNuevaContraseña(e.target.value)}
        />
       
        <button type="submit" className="boton">
          ConfirmarRR Contraseña
        </button>
      </form>
    </div>
  );
};

export default Formulario;
