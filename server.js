var express = require('express');
var bodyParser = require('body-parser');
var userCtrl = require('./userCtrl');

var app = express();
app.use(bodyParser.json());


app.get('/api/users', function(req, res) {
  if (req.query.favorites) {
    res.status(200).send(userCtrl.getUsersByFavorite(req.query.favorites));
  } else if (req.query.age) {
    res.status(200).send(userCtrl.getUsersByAgeLimit(req.query.age));
  } else if (req.query.lastname) {
    res.status(200).send(userCtrl.findUserByQuery('lastname', req.query.lastname));
  } else if (req.query.Email) {
    res.status(200).send(userCtrl.findUserByQuery('Email', req.query.Email));
  } else {
    res.status(200).send(userCtrl.readAll());
  }
});

app.get('/api/users/:userId', function(req, res) {
  res.status(200).send(userCtrl.findUserById(req.params.userId));
});

app.get('/api/admins', function(req, res) {
  res.status(200).send(userCtrl.getAdmins());
});

app.get('/api/nonadmins', function(req, res) {
  res.status(200).send(userCtrl.getNonAdmins());
});

app.put('/api/users/:userId', function(req, res) {
  res.status(200).send(userCtrl.updateUser(req.params.userId, req.body));
});

app.post('/api/users', function(req, res) {
  res.status(200).send(userCtrl.createUser(req.body));
});

app.delete('/api/users/:userId', function(req, res) {
  res.status(200).send(userCtrl.removeUser(req.params.userId));
});


// var port = 3000;
// app.listen(port, function(){
//     console.log('listening on ' + port);
// })

module.exports = app;
