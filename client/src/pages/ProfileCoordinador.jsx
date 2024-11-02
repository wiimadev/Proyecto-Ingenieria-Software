import { useState } from "react";
import "../assets/profile.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Modal from '../components/modal/Modal';
import '../assets/tabla.css';
import { useAuth } from "../context/authContext";

const ProfileCoordinador = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);



  return (
    <div className="contenedor">
     

      <br />

      <div className="franja-transparente">
        <p>Información General Coordinador </p>
      </div>
      <main className="main">
        <div className="perfil">
        <div className="header-left">
    <img
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      alt="Foto de perfil"
    />
  <Link to="/CargarFoto">
  <button className="upload-button">Subir nueva foto</button>
</Link>

  </div>

          <div className="datos-personales">
            <h5>Número de empleado: {user.id}</h5>
            <h5>Nombre del Docente: {user.username}</h5>
         
          </div>
          <div className="datos-adicionales">
            <h5>Centro Universitario: {user.Centro}</h5>
            <h5>Carrera universitaria: {user.Titulo} </h5>
            
          </div>
        </div>
      </main>
  
      
    
      <div className= "footer">
      <p className="footer-message">© Derechos Reservados UNAH 2013</p>
      <a className="footer-link" href="http://www.unah.edu.hn/?cat=1477&fcats" target="_blank" rel="noopener noreferrer">Direccion Ejecutiva De Tecnologia(DEGT)</a>
      </div>
    </div>
     )
}
export default ProfileCoordinador;




const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

