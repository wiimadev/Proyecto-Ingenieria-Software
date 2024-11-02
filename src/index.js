import app from "./app.js";
import { PORT } from "./config.js";
import { pool } from "./db.js";

async function main() {
  try {
    //await pool();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();
