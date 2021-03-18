const express = require('express');

const routes = express.Router();

const StudentsController = require('./app/controllers/StudentsController');
const TasksController = require('./app/controllers/TasksController');


routes.get('/', StudentsController.index);

routes.get('/students/:id', StudentsController.show);
routes.post('/students', StudentsController.create);
routes.put('/students', StudentsController.update);
routes.delete('/students', StudentsController.delete);

routes.post('/tasks', TasksController.create);
routes.put('/tasks', TasksController.update);
routes.delete('/tasks', TasksController.delete)


module.exports = routes;