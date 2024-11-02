import { useState } from "react";
import "../assets/home-style.css";
import { Link } from "react-router-dom";

import { useAuth } from "../context/authContext";

const Home = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  const [historialVisible, setHistorialVisible] = useState(false);
  const [calificacionesVisible, setCalificacionesVisible] = useState(false);
  const [repitenciaVisible, setRepitenciaVisible] = useState(false);
  const [equivalenciasVisible, setEquivalenciasVisible] = useState(false);

  const toggleHistorial = () => {
    setHistorialVisible(!historialVisible);
  };

  const toggleCalificaciones = () => {
    setCalificacionesVisible(!calificacionesVisible);
  };

  const toggleRepitencia = () => {
    setRepitenciaVisible(!repitenciaVisible);
  };

  const toggleEquivalencias = () => {
    setEquivalenciasVisible(!equivalenciasVisible);
  };

  return (
    <div className="contenedor">
      <div className="franja-transparente">
        <p>Información general</p>
      </div>
      <main className="main">
        <div className="perfil">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Foto de perfil"
          />
          <button href="formulario" class="RecuperarPass">Olvidé mi contraseña</button>
          <div className="datos-personales">
            <h5>Número de cuenta: {user.id}</h5> <br></br>
            <h5>Nombre del estudiante: {user.username}</h5>
            <br></br>
            <h5>Carrera universitaria: {user.Carrera}</h5>
          </div>
          <div className="datos-adicionales">
            <h5>Centro regional: {user.Centro}</h5>
            <br></br>
            <h5>Índice Global: --</h5>
            <br></br>
            <h5>Índice Periodo: -- </h5>
          </div>
        </div>
      </main>
      <hr />
      <hr />
      <div className="div-horizontal">
        <ul>
          <li className="opcion" onClick={toggleHistorial}>
            Historial académico
          </li>
          <li className="opcion" onClick={toggleCalificaciones}>
            Índice Académico
          </li>
          <li className="opcion">Seguimiento de calificaciones</li>
          <li className="opcion" onClick={toggleRepitencia}>
            Índice de repitencia
          </li>
          <li className="opcion" onClick={toggleEquivalencias}>
            Equivalencias
          </li>
        </ul>
      </div>
      <hr />
      <h5 className="h5historial">
        {" "}
        Drag a column header here to group by that column
      </h5>
      {/* Cuadro de Historial Académico */}
      {historialVisible && (
        <div className="cuadro">
          <h4>Codigo</h4>
          <h4>Asignatura</h4>
          <h4>UV</h4>
          <h4>Sección</h4>
          <h4>Año</h4>
          <h4>Período</h4>
          <h4>Calificación</h4>
          <h4>OBS</h4>
          {/* Aquí puedes agregar los campos de entrada para cada descripción */}
        </div>
      )}
      {/* Cuadro de Índice Académico */}
      {calificacionesVisible && (
        <div className="cuadro">
          {/* Aquí puedes mostrar el cálculo del índice académico */}
        </div>
      )}
      {/* Cuadro de Índice de Repitencia */}
      {repitenciaVisible && (
        <div className="cuadro">
          {/* Aquí puedes mostrar el cálculo del índice de repitencia */}
        </div>
      )}
      {/* Cuadro de Equivalencias */}
      {equivalenciasVisible && (
        <div className="cuadro">
          <h4>Codigo Asignatura</h4>
          <h4>Asignatura Cursada</h4>
          <h4>Codigo Asignatura 1</h4>
          <h4>Asignatura Equivalente</h4>
          {/* Aquí puedes agregar los campos de entrada para cada descripción */}
        </div>
      )}
      <hr />
      <div className="footer">
        <p className="footer-message">© Derechos Reservados UNAH 2013</p>
        <a
          className="footer-link"
          href="http://www.unah.edu.hn/?cat=1477&fcats"
          target="_blank"
          rel="noopener noreferrer"
        >
          Direccion Ejecutiva De Tecnologia(DEGT)
        </a>
      </div>
    </div>
  );
};

export default Home;
