
const express = require('express');
const router = express.Router();


router.get('/', (req, res, nex) => {
    res.send('db');
});


router.get('/db', (req, res, nex) => {
    res.send('Aqui Va todo lo relacionado con la base de datos')
});




module.exports = router;