const express = require('express');
const logger = require("../modules/logger");

/**
 * @param {express.Application} app Application express
 *
 */
module.exports = function (app) {

    app.get('/nomRequete', async (req, res) => {
        let unParametre = req.query.parametre;
        res.send("Un message à renvoyer au client");
    });
}