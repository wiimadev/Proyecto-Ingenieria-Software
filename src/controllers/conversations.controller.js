import { pool } from "../db.js";

// Obtener conversaciones
export const getConversations = async (req, res) => {
  try {
    const sql = "select * from conversaciones where miembro_uno = ? OR miembro_dos = ?";
    const [rows] = await pool.execute(sql, [req.params.usuarioID, req.params.usuarioID]);

    const formattedResults = [];

    rows.forEach((item) => {
      formattedResults.push({
        Miembros: [item.miembro_uno, item.miembro_dos],
        ConversacionID: item.conversacion_id,
      });
    });

    res.json(formattedResults);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener conversaciones" });
  }
};

