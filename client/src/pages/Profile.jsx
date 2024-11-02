// import { useState } from "react";
// import "../assets/profile.css"
// import { Link } from "react-router-dom";
// import styled from 'styled-components';
// import Modal from '../components/modal/Modal';
// import '../assets/tabla.css';
// import { useAuth } from "../context/authContext";

// const Profile = () => {
//   const { isAuthenticated, logout, user } = useAuth();
//   console.log(isAuthenticated, user);


//   const [historialVisible, setHistorialVisible] = useState(false);
//   const [solicitudesVisible, setSolicitudesVisible] = useState(false);
//   const [matriculaVisible, setMatriculaVisible] = useState(false);
//   const [vercalificacionesVisible, setVerCalificacionesVisible] = useState(false);


//   const toggleHistorial = () => {
//     setHistorialVisible(!historialVisible);
//   };

//   const toggleSolicitudes = () => {
//     setSolicitudesVisible(!setSolicitudesVisible);
//   };

//   const toggleMatricula= () => {
//     setMatriculaVisible(!matriculaVisible);
//   };

  

//   const toggleVerCalificaciones = () => {
//     setVerCalificacionesVisible(!vercalificacionesVisible);
//   };

//   const [estado1, cambiarestado1]= useState(false);
// 	const [transactions, setTransactions] = useState([
// 		{ id: 1, description: 'Pago de Matricula  ', amount: 270, selected: false },
// 		{ id: 2, description: 'Cambio de Centro  ', amount: 300, selected: false },
// 		{ id: 3, description: 'Cambio de Carrera  ', amount: 200, selected: false },
// 	  ]);
	
// 	  const handleCheckboxChange = (transactionId) => {
// 		const updatedTransactions = transactions.map((transaction) => {
// 		  if (transaction.id === transactionId) {
// 			return { ...transaction, selected: !transaction.selected };
// 		  }
// 		  return transaction;
// 		});
// 		setTransactions(updatedTransactions);
// 	  };
  

//   return (
//     <div className="contenedor">
     

//       <br />

//       <div className="franja-transparente">
//         <p>Información general</p>
//       </div>
//       <main className="main">
//         <div className="perfil">
//         <div className="header-left">
//     <img
//       src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
//       alt="Foto de perfil"
//     />
//   <Link to="/CargarFoto">
//   <button className="upload-button">Subir nueva foto</button>
// </Link>

//   </div>

//           <div className="datos-personales">
//             <h5>Número de cuenta: {user.id}</h5>
//             <h5>Nombre del estudiante: {user.username}</h5>
//             <h5>Carrera universitaria: {user.Carrera} </h5>
//           </div>
//           <div className="datos-adicionales">
//             <h5>Centro regional: {user.Centro}</h5>
//             <h5>Índice Global: --</h5>
//             <h5>Índice Periodo: --</h5>
//           </div>
//         </div>
//       </main>
  
//       <div className="div-horizontal">
//         <ul>
//           <li className="opcion" onClick={toggleHistorial}>
//             Historial académico
//           </li>
//           <li className="opcion" onClick={toggleSolicitudes}>
//             Solicitudes
//           </li>
//           <li className="opcion" onClick={toggleMatricula}>
//             Matricula
//           </li>
//           <li>
//           <Link to="/CambioContra">
//   <button className="password-change">Cambio de contraseña</button>
// </Link>
//           </li>         <li className="opcion" onClick={toggleVerCalificaciones}>
//            Ver Calificaciones
//           </li>
//           <li>
//          <div>
//          <button className="EstadoDeCuenta" onClick={()=>cambiarestado1(!estado1)}>Estado de cuenta</button>
//          <Modal estado = {estado1}
// 			cambiarestado = {cambiarestado1}>
//         <div>
//       <h1 className="text-xl ">Detalle de pago</h1>
// 	  	<br/>
// 	  <table>
// 			<thead>
// 			  <tr>
// 				<th>Descripción</th>
// 				<th>Monto</th>
// 				<th>Pagado</th>
// 			  </tr>
// 			</thead>
// 			<tbody>
// 			  {transactions.map((transaction) => (
// 				<tr key={transaction.id}>
// 				  <td>{transaction.description}</td>
// 				  <td>{transaction.amount}</td>
// 				  <td>
// 					<input
// 					  type="checkbox"
// 					  checked={transaction.selected}
// 					  onChange={() => handleCheckboxChange(transaction.id)}
// 					/>
// 				  </td>
// 				</tr>
// 			  ))}
// 			</tbody>
// 		  </table>
//     </div>
	
// 				<br />
				

//         </Modal>
//          </div>
       
//         <div>
          
//         </div>
//           </li>
//         </ul>
//       </div>
//       <hr />
//       <h5 className='h5historial' > Drag a column header here to group by that column</h5>
//       {/* Cuadro de Historial Académico */}
//       {historialVisible && (
//         <div className="cuadro">
          
//           <h4>Codigo</h4>
//           <h4>Asignatura</h4>
//           <h4>UV</h4>
//           <h4>Sección</h4>
//           <h4>Año</h4>
//           <h4>Período</h4>
//           <h4>Calificación</h4>
//           <h4>OBS</h4>
//           {/* Aquí puedes agregar los campos de entrada para cada descripción */}
//         </div>
        
//       )}
//       {/* Cuadro de solicitudes */}
//       {solicitudesVisible && (
//         <div className="cuadro">
          
//         </div>
//       )}
//       {/* Cuadro de Índice de Repitencia */}
//       {matriculaVisible && (
//         <div className="cuadro">
//           <h4>Codigo</h4>
//           <h4>Asignatura</h4>
//           <h4>UV</h4>
//           <h4>Sección</h4>
//           <h4>Año</h4>
//           <h4>Período</h4>
//           <h4>Calificación</h4>
//           <h4>OBS</h4>
//         </div>
//       )}

//       {vercalificacionesVisible && (
//         <div className="cuadro">
//           <h4>Codigo</h4>
//           <h4>Asignatura</h4>
//           <h4>UV</h4>
//           <h4>Sección</h4>
//           <h4>Año</h4>
//           <h4>Período</h4>
//           <h4>Calificación</h4>
//           <h4>OBS</h4>
//         </div>
//       )}
    
//       <hr />
//       <div className= "footer">
//       <p className="footer-message">© Derechos Reservados UNAH 2013</p>
//       <a className="footer-link" href="http://www.unah.edu.hn/?cat=1477&fcats" target="_blank" rel="noopener noreferrer">Direccion Ejecutiva De Tecnologia(DEGT)</a>
//       </div>
//     </div>
//      )
// }
// export default Profile;




// const Boton = styled.button`
// 	display: block;
// 	padding: 10px 30px;
// 	border-radius: 100px;
// 	color: #fff;
// 	border: none;
// 	background: #1766DC;
// 	cursor: pointer;
// 	font-family: 'Roboto', sans-serif;
// 	font-weight: 500;
// 	transition: .3s ease all;

// 	&:hover {
// 		background: #0066FF;
// 	}
// `;

import { useState } from "react";
import "../assets/profile.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Modal from '../components/modal/Modal';
import '../assets/tabla.css';
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);


  const [historialVisible, setHistorialVisible] = useState(false);
  const [solicitudesVisible, setSolicitudesVisible] = useState(false);
  const [matriculaVisible, setMatriculaVisible] = useState(false);
  const [vercalificacionesVisible, setVerCalificacionesVisible] = useState(false);


  const toggleHistorial = () => {
    setHistorialVisible(!historialVisible);
  };

  const toggleSolicitudes = () => {
    setSolicitudesVisible(!setSolicitudesVisible);
  };

  const toggleMatricula= () => {
    setMatriculaVisible(!matriculaVisible);
  };

  

  const toggleVerCalificaciones = () => {
    setVerCalificacionesVisible(!vercalificacionesVisible);
  };

  const [estado1, cambiarestado1]= useState(false);
	const [transactions, setTransactions] = useState([
		{ id: 1, description: 'Pago de Matricula  ', amount: 270, selected: false },
		{ id: 2, description: 'Cambio de Centro  ', amount: 300, selected: false },
		{ id: 3, description: 'Cambio de Carrera  ', amount: 200, selected: false },
	  ]);
	
	  const handleCheckboxChange = (transactionId) => {
		const updatedTransactions = transactions.map((transaction) => {
		  if (transaction.id === transactionId) {
			return { ...transaction, selected: !transaction.selected };
		  }
		  return transaction;
		});
		setTransactions(updatedTransactions);
	  };
  

  return (
    <div className="contenedor">
     
     <div className="div-horizontal">
          <ul>
            <li className="opcion" onClick={toggleHistorial}>
              Historial académico
              {historialVisible && (
                <ul className="submenu">
                   <Link to= "">   <li>Historial Academico</li> </Link>
            <Link to= "">   <li>Indice Academico</li> </Link>
              <Link to= "">   <li>Seguimiento de calificaciones</li> </Link>
              <Link to= "">   <li>Equivalencias</li> </Link>
                  </ul>
          )}
            </li>
            <li className="opcion" onClick={toggleSolicitudes}>
              Solicitudes
            </li>
            <li className="opcion" onClick={toggleMatricula}>
              Matrícula
              {matriculaVisible && (
                <ul className="submenu">
                  <Link to= "">  <li>Adicionar asignatura</li></Link>
                <Link to= "">  <li>Cancelar asignatura</li></Link>
                <Link to= "">  <li>Forma 03</li></Link>
                <Link to= "">  <li>Listado de asignaturas en lista de espera</li></Link>
                <Link to= "">  <li>Cancelar asignaturas en lista de espera</li></Link>
                <Link to= "">  <li>Estado de cuenta</li></Link>
                </ul>
              )}
            </li>
            <li>
              <Link to="/cambioContra">
                <button className="password-change">Contraseña</button>
              </Link>
            </li>
            <li className="opcion" onClick={toggleVerCalificaciones}>
              Ver Calificaciones
            </li>
            <li>
            <div>
         <button className="EstadoDeCuenta" onClick={()=>cambiarestado1(!estado1)}>Estado de cuenta</button>
         <Modal estado = {estado1}
			cambiarestado = {cambiarestado1}>
        <div>
      <h1 className="text-xl ">Detalle de pago</h1>
	  	<br/>
	  <table>
			<thead>
			  <tr>
				<th>Descripción</th>
				<th>Monto</th>
				<th>Pagado</th>
			  </tr>
			</thead>
			<tbody>
			  {transactions.map((transaction) => (
				<tr key={transaction.id}>
				  <td>{transaction.description}</td>
				  <td>{transaction.amount}</td>
				  <td>
					<input
					  type="checkbox"
					  checked={transaction.selected}
					  onChange={() => handleCheckboxChange(transaction.id)}
					/>
				  </td>
				</tr>
			  ))}
			</tbody>
		  </table>
    </div>
	
				<br />
				

        </Modal>
         </div>
            </li>
          </ul>
        </div>
          <br>
          </br>
      <div className="franja-transparente">
        <p>Información General</p>
      </div>
      <main className="main">
        <div className="perfil">
        <div className="header-left">
    <img
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      alt="Foto de perfil"
    />
  <Link >
  <button type="file" className="upload-button">Subir nueva foto</button>
</Link>

  </div>

          <div className="datos-personales">
            <h5>Número de cuenta: {user.id}</h5>
            <h5>Nombre del estudiante: {user.username}</h5>
            <h5>Carrera universitaria: {user.Carrera} </h5>
          </div>
          <div className="datos-adicionales">
            <h5>Centro regional: {user.Centro}</h5>
            <h5>Índice Global: --</h5>
            <h5>Índice Periodo: --</h5>
          </div>
        </div>
      </main>
  
      <div className="div-horizontal">
       
         <div>
         <button className="EstadoDeCuenta" onClick={()=>cambiarestado1(!estado1)}>Estado de cuenta</button>
         <Modal estado = {estado1}
			cambiarestado = {cambiarestado1}>
        <div>
      <h1 className="text-xl ">Detalle de pago</h1>
	  	<br/>
	  <table>
			<thead>
			  <tr>
				<th>Descripción</th>
				<th>Monto</th>
				<th>Pagado</th>
			  </tr>
			</thead>
			<tbody>
			  {transactions.map((transaction) => (
				<tr key={transaction.id}>
				  <td>{transaction.description}</td>
				  <td>{transaction.amount}</td>
				  <td>
					<input
					  type="checkbox"
					  checked={transaction.selected}
					  onChange={() => handleCheckboxChange(transaction.id)}
					/>
				  </td>
				</tr>
			  ))}
			</tbody>
		  </table>
    </div>
	
				<br />
				

        </Modal>
         </div>
       
        <div>
          
        </div>
       
      </div>
      <hr />
     
        
      {/* Cuadro de solicitudes */}
      {solicitudesVisible && (
        <div className="cuadro">
          
        </div>
      )}
    

      {vercalificacionesVisible && (
        <div className="cuadro">
          <h4>Codigo</h4>
          <h4>Asignatura</h4>
          <h4>UV</h4>
          <h4>Sección</h4>
          <h4>Año</h4>
          <h4>Período</h4>
          <h4>Calificación</h4>
          <h4>OBS</h4>
        </div>
      )}
    
      <hr />
      <div className= "footer">
      <p className="footer-message">© Derechos Reservados UNAH 2013</p>
      <a className="footer-link" href="http://www.unah.edu.hn/?cat=1477&fcats" target="_blank" rel="noopener noreferrer">Direccion Ejecutiva De Tecnologia(DEGT)</a>
      </div>
    </div>
     )
}
export default Profile;




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