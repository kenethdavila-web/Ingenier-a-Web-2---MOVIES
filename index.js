require("dotenv").config();
const express = require("express");
const cors = require("cors");

const {getConnection} = require("./backend/db/db-connection-mongo");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Movies funcionando 🚀");
});

/*-----Routes -----*/
app.use("/api/genero", require("./backend/routes/genero"));
app.use("/api/media", require("./backend/routes/media"));
app.use("/api/director", require("./backend/routes/director"));
app.use("/api/productora", require("./backend/routes/productora"));
app.use("/api/tipo", require("./backend/routes/tipo"));

getConnection();

app.listen(port, () => {
    console.log(`🟢 Servidor corriendo en el puerto ${port}`);
});