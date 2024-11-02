import { pool } from "../db.js";

export const getDataSecciones = async (req, res) => {
  try {
    // SELECT nombre_edificio from edificio where id_centro='UNAH-CU';

    const asignaturas = await queryAsignaturas(req.body.departamento);
    const docentes = await queryDocentes(
      req.body.departamento,
      req.body.centro
    );
    const edificios = await queryEdificios(req.body.centro);

    res.json({
      asignaturas: asignaturas,
      docentes: docentes,
      edificios: edificios,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener datos" });
  }
};

// Consulta asignaturas segun departamento
async function queryAsignaturas(departamento) {
  const sql = "SELECT * FROM asignatura  WHERE nombre_departamento  = ? ";
  const [rows] = await pool.execute(sql, [departamento]);

  const formattedResults = rows.map((item) => {
    return {
      Codigo: item.id_clase,
      Nombre: item.nombre_clase,
    };
  });

  console.log(formattedResults);
  return formattedResults;
}

// Consulta docentes segun departamento y centro
async function queryDocentes(departamento, centro) {
  const sql =
    "select fullName  from infodocentes where nombre_departamento= ? and id_centro= ?";
  const [rows] = await pool.execute(sql, [departamento, centro]);

  const formattedResults = rows.map((item) => {
    return {
      Codigo: item.id_clase,
      Nombre: item.nombre_clase,
    };
  });

  console.log(formattedResults);
  return formattedResults;
}

// Consultar edificios segun el Centro
async function queryEdificios(centro) {
  const sql = "SELECT nombre_edificio from edificio where id_centro= ?";
  const [rows] = await pool.execute(sql, [centro]);

  const formattedResults = rows.map((item) => {
    return {
      Codigo: item.id_clase,
      Nombre: item.nombre_clase,
    };
  });

  console.log(formattedResults);
  return formattedResults;
}


// obteneer aulas
export const getDataAulas = async (req, res) => {
  try {
    //select id_aula from aula where  nombre_edificio='B2' ;
    const sql = "select id_aula from aula where  nombre_edificio= ?";
    const [rows] = await pool.execute(sql, [req.body.edificio]);
  
    const formattedResults = rows.map((item) => {
      return {
        Aulas: item.id_aula
      };
    });

    res.json({
      aulas: formattedResults
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener datos" });
  }
}
