import React, { useState, useEffect } from 'react';

const Secciones = () => {
  const [opcionesSelect, setOpcionesSelect] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza una solicitud al backend para obtener los datos del select
    fetch('/api/obtenerOpciones')
      .then(response => response.json())
      .then(data => {
        setOpcionesSelect(data); // Actualiza el estado con los datos recibidos
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos del select', error);
        setLoading(false);
      });
  }, []); // El segundo argumento vacío asegura que la solicitud se haga solo una vez (equivalente a componentDidMount)

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <form className='h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-blue-400'>
      <label htmlFor="opcionesSelect">Selecciona una opción:</label>
      <select id="opcionesSelect">
        {opcionesSelect.map(opcion => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
      
    </form>
  );
};

export default Secciones;


// import React from 'react'

// import Select, {components } from 'react-select'

// function Secciones() {
//     const op = [{value: "Base de Datos 1"},{value: "Base de Datos 2"}];

//      // Estilos personalizados para el componente Select
//   const customStyles = {
//     control: (provided, state) => ({
//       ...provided,
//       width: '100%',
//       border: state.isFocused ? '2px solid #007bff' : '1px solid #ccc',
//       borderRadius: '4px',
//       boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.2)' : 'none',
//       '&:hover': {
//         border: state.isFocused ? '2px solid #007bff' : '1px solid #ccc',
//       },
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isSelected ? 'red' : 'white',
//       color: state.isSelected ? 'black' : 'black',
//       padding: '0.75rem',
//       cursor: 'pointer',
//       transition: 'background-color 0.2s',
//     }),
//     menu: (provided) => ({
//       ...provided,
//       backgroundColor: 'white',
//       border: '1px solid #ccc',
//       borderRadius: '4px',
//     }),
//     singleValue: (provided) => ({
//       ...provided,
//       color: 'black',
//     }),
//   };
//   return (
//     <div className='h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-blue-300'>
//         <Select options={op} isClearable styles={customStyles}/>
//         {/* <label className='block bg-slate-400' htmlFor="asignatura">Asignatura</label>
//         <select className='max-w-full bg-slate-400'>
//             <option>Prueba</option>
//             <option>Prueba 2</option>
//         </select> */}
//     </div>
//   )
// }

// export default Secciones