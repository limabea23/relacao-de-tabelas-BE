require("dotenv").config();
const express = require("express");
const cors = require("cors");
const wizardRoutes = require("./src/routes/wizardRoutes.js");
const houseRoutes = require("./src/routes/houseRoutes.js");
const reportRoutes = require("./src/routes/reportRoutes.js");
const setupSwagger = require('./src/config/swagger');
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use("/api", wizardRoutes); 
app.use("/api", houseRoutes); 
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Suuucessoooo, servidor rodando na porta ${PORT} 💗🌟🤠💋`);
});