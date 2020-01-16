const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/api', (req, res) => {
    res.json({ msg: 'Hello World' });
});

routes.post('/api/users', UserController.store);

module.exports = routes;