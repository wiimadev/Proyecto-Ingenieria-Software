import { pool } from "../db.js";

// Obtener mensajes
export const getMessages = async (req, res) => {
  try {
    const sql = "select * from mensajes where conversacion_id = ?";
    const [rows] = await pool.execute(sql, [req.params.conversacionID]);

    const formattedResults = [];

    rows.forEach((item) => {
      formattedResults.push({
        menssage_id: item.mensaje_id,
        conversation_id: item.conversacion_id,
        sender: item.remitente,
        text: item.texto,
        create_at: item.fecha_creacion,
      });
    });

    res.json(formattedResults);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener conversaciones" });
  }
};

//enviar mensajes
export const postMessages = async (req, res) => {
  console.log(req.body);
  const newMessage = req.body;
  const { conversation_id, sender, text } = newMessage;

  try {
    const sql = `insert into mensajes (conversacion_id, remitente, texto, fecha_creacion) values (${conversation_id}, "${sender}", "${text}", current_timestamp())`;

    await pool.execute(sql);


    res.status(200).json("Message saved");
  } catch (err) {
    res.status(500).json(err);
  }
};

// insert into mensajes (conversacion_id, remitente, texto, fecha_creacion) values (1, "20181008711", "Hola Fernando, soy Wilson", current_timestamp())
