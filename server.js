/**
 * Created by daiyingheng on 16/8/30.
 */
require('babel-register');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom/server');
var mongoose = require('mongoose');

var config = require('./config');
var routes = require('./app/routes');
var Article = require('./models/article');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000); app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/articles', function(req, res, next) {
  Article.find( {} )
  .exec(function(err, articles) {
    if (err) return next(err);
    console.log('articles: ' + articles);
    if (articles){
      return res.send(articles);
    }
  })
})
/**
 * Post /admin/post 发表文章
 */
app.post('/admin/post', function(req, res, next) {
  var content = req.body.content;

  var article = new Article({
    title:'123',
    content: content
  });

  article.save(function(err) {
    if (err) return next(err);
    res.redirect('/');
  })
})

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

/**
 * Socket.io
 * 显示在线人数
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
