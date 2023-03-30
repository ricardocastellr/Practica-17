let express = require('express');//iniciamos express
let router = express.Router(); //Usamos el Router de express para poder usar este archivo fuera

router.get('/student',(req,res)=>{
    res.render('student')
})

router.post('/addStudent', (req, res)=>{
    res.render('displayData', { Nombre: req.body.nombre,
                                Edad: req.body.edad,
                                NSS: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
}); // Para poder renderizar la información en displayData cambiamos el metodo send al render y lo convertimos a 4 keys
    // también usamos el metodo post

router.post('/personJson', express.json({type: '*/*'}), function(req,res){
    console.log(`Nombre: ${req.body.Nombre}
                 Apellido: ${req.body.Apellido}`)
}); // Parseamos peticiones que contienen un objeto JSON en el body.

router.get('/testJson', function(req,res){
    res.render('testJson'); // Renderizamos la vista de testJson
});

module.exports = router;