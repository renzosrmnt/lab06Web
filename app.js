const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

// Configurar el directorio de archivos estáticos
app.use(express.static('public'));

// Configurar el motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Configurar el motor de plantillas EJS
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para renderizar la plantilla Pug "index"
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug', fecha: new Date().toLocaleDateString() });
});

// Ruta para mostrar el perfil de un usuario con una plantilla EJS
app.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;
  // Supongamos que estos son los datos del usuario recuperados de la base de datos
  const user = { id: userId, nombre: 'Usuario ' + userId, email: 'usuario@example.com', fechaRegistro: '01/01/2023' };
  res.render('perfil', { user: user });
});

// Ruta para renderizar la plantilla Pug "miplantilla"
app.get('/miplantilla-pug', (req, res) => {
  res.render('miplantilla', { mensaje: '¡Hola desde la plantilla Pug!' });
});

// Ruta para renderizar la plantilla EJS "miplantilla"
app.get('/miplantilla-ejs', (req, res) => {
    const usuario = {
      nombre: 'Grupo',
      edad: 20,
      correo: 'grupo@example.com'
    };
  
    const articulos = [
      { titulo: 'Artículo 1', contenido: 'Contenido del artículo 1' },
      { titulo: 'Artículo 2', contenido: 'Contenido del artículo 2' },
      { titulo: 'Artículo 3', contenido: 'Contenido del artículo 3' }
    ];
  
    res.render('miplantilla.ejs', { usuario, articulos });
  });
  

// Ruta para renderizar la plantilla EJS "index"
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS', fecha: new Date().toLocaleDateString() });
});

// Ruta para mostrar información sobre la flexibilidad de los motores de plantillas
app.get('/flexibilidad', (req, res) => {
  const flexibilidadText = "Puedes agregar más marcadores de posición y elementos HTML en tus plantillas según las necesidades de tu proyecto. Los motores de plantillas también admiten bucles, condicionales y otras estructuras de control para facilitar la generación de contenido dinámico.";
  res.render('flexibilidad', { flexibilidadText: flexibilidadText });
});

// Ruta para mostrar la tabla de multiplicar
app.get('/multiplicar/:numero', (req, res) => {
  const numero = parseInt(req.params.numero);
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
