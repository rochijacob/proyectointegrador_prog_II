var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser'); //permite que las cookies esten disponibles
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //Permite que las cookies esten disponibles
app.use(express.static(path.join(__dirname, 'public')));


//Es importante que la configuracion de la sesion se encuentre en esta posicion ya que son "pre-requisitos" de los routers





// Habilitamos a express a usar sesiones (req.session.abc)

const session = require('express-session'); //Entry point de la aplicacion 

app.use(session( { //ejecutacion de la funcion session(), recibe un objeto literal con la propiedad secret con un texto unico aleatorio (identifica nuestro sitio web)
  secret: "steadler login", //texto que identifica la aplicacion, totalmente customizable
	resave: false,
	saveUninitialized: true
}));




// Leer la cookie y loguear al usuario, si no esta logueado (no esta cargado en la sesion)

const db = require('./database/models');

app.use(function(req, res, next) {
  if(req.cookies.userId && !req.session.usuario) {
    db.Usuario.findByPk(req.cookies.userId).then(resultado => {
      req.session.usuario = resultado.name;
      return next();
    });
  } else {
  	return next();
  }}
);

// Cargamos variables en locals, para que puedan ser usadas en todas las vistas (por ej, logueado)

app.use(function(req, res, next) {
  if(req.session.user){ //me permite guardar variables de la sesion --> las busco con <%= locals.logueado %>. Genero variables disponibles a todas las vistas, (=/= las rutas que me definian variables para cada vista)
    res.locals = { // se puede poner lo que queramos y despues se puede usar en la vista.es una variable disponible en todas las vistas. 
      logueado: true,
      usuario: req.session.user
    }
  } else {
    res.locals = {
      logueado: false
    }
  }

	return next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
