const Todo = require('../models/todo.model.js');

module.exports = {
  create: (req, res) => {
    // Validate request
    if (!req.body) {
      return res.status(400).send({
        message: "Please fill required field"
      });
    }
    let todo = new Todo(req.body)
    todo.save()
      .then(result => {
        res.json({ success: true, result: result })
      })
      .catch(err => {
        res.json({ success: false, result: err })
      })
  },

  findAll: (req, res) => {
    // use mongoose to get all todos in the database
    Todo.find().then(todos => {
      res.send(todos);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while getting list of users."
      });
    });;
  },

  // Update a Todo identified by the id in the request
  update: (req, res) => {
    // Validate Request
    if (!req.body) {
      return res.status(400).send({
        message: "Please fill required field"
      });
    }

    // Find todo and update it with the request body
    Todo.findByIdAndUpdate(req.params.id, {
      name: req.body.name
    }, { new: true })
      .then(todo => {
        console.log("hello"+todo)
        if (!todo) {
          return res.status(404).send({
            message: "todo not found with id " + req.params.id
          });
        }
        res.send(todo);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: "todo not found with id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "Error updating todo with id " + req.params.id
        });
      });

  },

  remove: (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: "todo not found with id " + req.params.id
          });
        }
        res.send({ message: "todo deleted successfully!" });
      }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: "todo not found with id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "Could not delete todo with id " + req.params.id
        });
      })
  }
}