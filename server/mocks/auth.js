module.exports = function(app) {
  var express = require('express');
  var authRouter = express.Router();

  authRouter.get('/', function(req, res) {
    res.send({
    "token_type":"bearer","expires_in":3600,"refresh_token":"5dab113763e8d5a47332ea264a4cbe","access_token":"55d0d3c39d5ad9de0c8f57cd5685ac5"
    });
  });

  authRouter.post('/', function(req, res) {
    //res.status(201).end();
    res.send({
      "token_type":"bearer","expires_in":3600,"refresh_token":"5dab113763e8d5a47332ea264a4cbe","access_token":"55d0d3c39d5ad9de0c8f57cd5685ac5"
    });
  });

  authRouter.get('/:id', function(req, res) {
    res.send({
      'auth': {
        id: req.params.id
      }
    });
  });

  authRouter.put('/:id', function(req, res) {
    res.send({
      'auth': {
        id: req.params.id
      }
    });
  });

  authRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/auth', authRouter);
};
