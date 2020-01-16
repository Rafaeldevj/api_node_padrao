const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

routes.get('', (req, res) => {
    res.json({ msg: 'Projeto Base!' });
});

routes.get('/api/users', UserController.index);
routes.get('/api/users/:user_id', UserController.find);
routes.post('/api/users', UserController.store);
routes.put('/api/users/:user_id', UserController.update);
routes.delete('/api/users/:user_id', UserController.destroy);

routes.post('/api/session', SessionController.store);


module.exports = routes;