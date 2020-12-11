module.exports = (app) => {
  const todo = require('../controllers/todo.controller.js');

  // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', todo.findAll);

    // Create todo
    app.post('/api/todo', todo.create);

    // Update todo
    app.put('/api/todo/:id', todo.update);

    // Delete todo
    app.delete('/api/todos/:id', todo.remove);

}