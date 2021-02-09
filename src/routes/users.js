const express = require('express');
const router = express.Router();


router.get('/users/sigin', (req, res) => {
    res.send('Ingresando a la app');

});

router.get('/users/sigout', (req, res) => {
    res.send('Formulario de Autenticacion');

});


module.exports = router;