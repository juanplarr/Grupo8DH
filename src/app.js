const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const methodOverride = require('method-override');

//Requerir las librerias para el trabajo de Sesiones y Cookies
const session = require('express-session');
const cookieParser = require('cookie-parser')

//Esto nos permite poder enviar datos desde el POST por el método PUT o DELETE
app.use(methodOverride('_method'));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
//=================================================
app.use(express.urlencoded({ extended: false }));
//=================================================

//Middleware Session - Cookies
app.use(session({
    secret: 'GorriaoSecret',
    resave: false,
    saveUninitialized: false
}))

app.use(cookieParser());


//requerir archivos de rutas
const mainRoutes = require('./routes/mainRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')

// Levantar el servidor
app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});



// Donde están los recursos estáticos
app.use(express.static(publicPath));

//Indicando que usamos EJS
app.set('view engine', 'ejs');

//consumiendo rutas
app.use('/', mainRoutes);

//USER ROUTES

app.use('/', userRoutes)

//PRODUCT ROUTES

app.use('/', productRoutes)
