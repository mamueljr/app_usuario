const express = require('express');
const router = express.Router();


router.get('/sigin', (req, res) => {
    res.send('Ingresando a la app');

});

router.get('/sigout', (req, res) => {
    res.send('Formulario de Autenticacion');

});


module.exports = router;