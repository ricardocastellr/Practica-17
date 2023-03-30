let express = require('express'); 

// Rutas
let personsRoute = require('./routes/person');  // ruta de person
// Se han eliminado todas las rutas de este directorio porque todas ahora estan en person.js como lo indica la practica


let app = express(); // Definimos una variable para express
let port = process.env.PORT || 3000;

// Configuración
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs'); // Usamos el motor de vistas ejs para poder visualizar los views
app.use(express.urlencoded({extended: false})) // Para indicar que vamos a parsear con elementos del body

//Redirección
app.use(personsRoute); // llamamos el router de person

let PORT = process.env.PORT || 3000; //definición del puerto de escucha

app.listen(PORT,()=>{
    console.log('escuchando en el puerto 3000') // si funcionó la conexión imprimimos un mensaje en la consola
})