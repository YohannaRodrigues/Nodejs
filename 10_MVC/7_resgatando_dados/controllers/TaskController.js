const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create')
  }

  static createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    Task.create(task)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log())
  }

  static showTasks(req, res) {
    Task.findAll({ raw: true })
      .then((data) => {
        res.render('tasks/all', { tasks: data })
      })
      .catch((err) => console.log(err))
  }
}
