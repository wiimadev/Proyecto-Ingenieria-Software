import React, { useState } from 'react';
import Select from "react-select";
// import { useSecciones } from '../context/seccionesContext';
import { useForm } from "react-hook-form";

export default function Crear_Secciones() {
//   const { createSecciones } = useSecciones();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const secciones = [data]
    // createSecciones(secciones); // Llamar a la función para agregar docentes con los datos del formulario
  };


  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [datos, setDatos] = useState([]);
  const [nuevoDato, setNuevoDato] = useState('');

  const handleInputChange = (event) => {
    setNuevoDato(event.target.value);
  };

  const agregarDato = () => {
    if (nuevoDato.trim() !== '') {
      setDatos([...datos, nuevoDato]);
      setNuevoDato('');
    }
  };
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center p-10 rounded-md space-y-7  border-2 border-blue-700">
      <h1 className="text-2xl font-bold text-center text-cyan-950 ">
        Crear Secciones
      </h1>

      <table>
        <tbody>
          <tr>
            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Asignatura:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options} 
                {...register("nombreAsignatura")}
                className="text-cyan-950" />
              </div>
            </td>

            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Edificio:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options} 
                {...register("edificio")}
                className="text-cyan-950" />
              </div>
            </td>

            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Aula:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options}
                {...register("aula")}
                 className="text-cyan-950" />
              </div>
            </td>

          </tr>

          <tr>
            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Docentes:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options}
                {...register("docentes")}
                 className="text-cyan-950" />
              </div>
            </td>

            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Hora Inicio:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options} 
                {...register("hInicio")}
                className="text-cyan-950" />
              </div>
            </td>

            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Hora Final:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options}
                {...register("hFinal")}
                 className="text-cyan-950" />
              </div>
            </td>
          </tr>
             

          <tr>
          <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                ID:
              </h1>
            </td>
            <td>
              <div className="relative">
                <input
                  type="text"
                  {...register("idSeccion")}
                  className="px-2 py-1 text-cyan-900  border border-gray-400 rounded w-24"
                />
              </div>
            </td>
            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Dias:
              </h1>
            </td>
            <td>
              <div className="relative">
                <Select options={options}
                {...register("dias")}
                 className="text-cyan-950" />
              </div>
            </td>

            <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Cupos:
              </h1>
            </td>
            <td>
              <div className="relative">
                <input
                  type="text"
                  {...register("cupos")}
                  className="px-2 py-1 text-cyan-900  border border-gray-400 rounded w-24"
                />
              </div>
            </td>
          </tr>

          <tr>
          <td>
              <h1 className="text-9px block font-bold my-1 text-cyan-950">
                Periodo:
              </h1>
            </td>
            <td>
              <div className="relative">
                <input
                  type="text"
                  {...register("periodo")}
                  className="px-2 py-1 text-cyan-900  border border-gray-400 rounded w-24"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <button className='bg-blue-800 px-2 py-1 rounded-md my-2 w-60 disabled:bg-indigo-300 hover:bg-blue-900' onClick={agregarDato}>Agregar</button>
     
      <table>
        <thead>
          <tr>
            <th className='text-cyan-950'>ID</th>
            <th className='text-cyan-950'>Asignatura</th>
            <th className='text-cyan-950'>Docente</th>
            <th className='text-cyan-950'>Aula</th>
            <th className='text-cyan-950'>Edificio</th>
            <th className='text-cyan-950'>Hora Inicio</th>
            <th className='text-cyan-950'>Hora Final</th>
            <th className='text-cyan-950'>Dias</th>
            <th className='text-cyan-950'>Cupos</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato, index) => (
            <tr key={index}>
              <td>{dato}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
  );
}
