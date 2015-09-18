var express = require('express');
var Router = require('named-routes');

var app = express();
var nestedRouter = require('./routes/nested')(app);

app.use((req, res, next) => {
  res.locals.locale = 'en';
  next();
});

app.use(nestedRouter.middleware);
app.use('/:locale', nestedRouter.middleware);

app.use('/:locale/pro', (req, res, next) => {
  res.locals.pro = true;
  next();
}, nestedRouter.middleware);

app.get('/admin/user', 'admin.user.edit', (req, res, next) => {
  res.send('ok');
});

console.log(app.namedRoutes.build('admin.user.edit'));

app.listen(3000);
