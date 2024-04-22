const express = require('express');
const app = express();

const ejs = require('ejs');
const path = require('path');



app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Ruta para renderizar la plantilla Pug "index" con datos dinámicos adicionales
app.get('/pug', (req, res) => {
  const usuario = {
    nombre: 'Grupo "NOSE"',
    instituto: 'TECSUP',
    correo: 'grupo@tecsup.edu.pe'
  };

  const articulos = [
    { titulo: 'Estudiante 1', contenido: 'Carmen Sandoval' },
    { titulo: 'Estudiante 2', contenido: 'Renzo Sarmiento' },
    { titulo: 'Estudiante 3', contenido: 'Jhoel Dioces' },
    { titulo: 'Estudiante 4', contenido: 'Leomar Urcia' }
  ];

  res.render('index', { usuario, articulos });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);


// Ruta para renderizar la plantilla EJS "index" con datos dinámicos adicionales
app.get('/ejs', (req, res) => {
  const usuario = {
    nombre: 'Grupo "NOSE"',
    instituto: 'TECSUP',
    correo: 'grupo@tecsup.edu.pe'
  };

  const articulos = [
    { titulo: 'Estudiante 1', contenido: 'Carmen Sandoval' },
    { titulo: 'Estudiante 2', contenido: 'Renzo Sarmiento' },
    { titulo: 'Estudiante 3', contenido: 'Jhoel Dioces' },
    { titulo: 'Estudiante 4', contenido: 'Leomar Urcia' }
  ];

  res.render('index.ejs', { usuario, articulos });
});


app.use(express.static('public'));
app.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;
  // Supongamos que estos son los datos del usuario recuperados de la base de datos
  const user = {
    id: userId,
    nombre: 'Hello ' + userId,
    correo: 'usuario@example.com',
    fechaRegistro: '01/01/2023', //Nombre de archivo de imagen de perfil
  };
  res.render('perfil', { user: user });
});



app.use(express.static('public'));

app.get('/miplantilla-pug', (req, res) => {
  res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' });
});


app.get('/miplantilla-ejs', (req, res) => {
  const usuario = {
    nombre: 'Grupo NOSE',
    correo: 'tecsup@edu.com.pe'
  };

 const articulos = [
  { 
    titulo: 'Guía para principiantes en programación',
    contenido: 'Contenido del artículo 1: Una guía completa para aquellos que están comenzando en el mundo de la programación. Incluye consejos útiles, recursos recomendados y ejemplos prácticos para aprender los conceptos básicos de la programación.',
  },
  { 
    titulo: 'Los beneficios del ejercicio diario',
    contenido: 'Contenido del artículo 2: Un artículo que explora los diversos beneficios que tiene el ejercicio físico regular en la salud física y mental. Se discuten los efectos positivos del ejercicio en el bienestar general y se brindan consejos para incorporar la actividad física en la rutina diaria.',
  },
  { 
    titulo: 'Cómo mejorar tu productividad en el trabajo',
    contenido: 'Contenido del artículo 3: Un recurso práctico que ofrece estrategias efectivas para aumentar la productividad y gestionar el tiempo de manera más eficiente en el entorno laboral. Se abordan temas como la organización, la planificación de tareas y el manejo del estrés.',
  }
];


  res.render('miplantilla', { usuario, articulos });
});
 

app.use(express.static('public'));
app.get('/multiplicar:num', (req, res) => {
  const numero = parseInt(req.params.num);
  if (isNaN(numero)) {
    res.status(400).send('Error: El parámetro debe ser un número.');
  } else {
    res.render('tabla', { numero });
  }
});


// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Aplicación web dinámica ejecutándose en http://localhost:${PORT}`);
});
