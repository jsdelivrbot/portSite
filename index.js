/**
 * Module dependencies.
 */
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const sass = require('node-sass-middleware');

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');


/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
/**
 * Primary app routes.
 */

app.get('/', homeController.index);
app.get('/vrphotos', homeController.vrphotos);
/**
 * Start Express server.
 */

app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode.', app.get('port'), app.get('env'));
});

module.exports = app;
