const express = require('express');
const logger = require("./modules/logger"); // Permet d'avoir des logs plus jolis

// CONFIGURATION ==================================
const app = express();
app.use('/', express.static('public'));

if (!process.env.PORT) process.env.PORT = "8080";
if (!process.env.DOMAIN) process.env.DOMAIN = "localhost";
const PROTOCOLE = process.env.PORT === "443" ? "https" : "http"
const PORT_SPECIAL = process.env.PORT !== "80" && process.env.PORT !== "443"

// ROUTES =========================================
require('./app/api.js')(app);

// DÉMARRAGE ======================================
app.listen(process.env.PORT, async function () {
    logger.log(`Serveur démarré sur le port ${process.env.PORT}`, "ready");
    logger.log(`Accès à la page d'accueil : ${PROTOCOLE}://${process.env.DOMAIN}${PORT_SPECIAL ? `:${process.env.PORT}` : ""}`, "ready");
});