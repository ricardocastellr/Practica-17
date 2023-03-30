let express = require('express');
let router = express.Router();

/*
/*app.post('/addStudent', (req, res)=>{
    res.send(` Nombre: ${req.body.nombre}
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                tipoSangre: ${req.body.tipoSangre}`);
}); // Usando el metodo post y metodo send enviamos la informacion
*/

router.post('/addStudent', (req, res)=>{
    res.render('displayData', { Nombre: req.body.nombre,
                                Edad: req.body.edad,
                                NSS: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
}); // Para poder renderizar la información en displayData cambiamos el metodo send al render y lo convertimos a 4 keys
    // también usamos el metodo post

module.exports = router;
