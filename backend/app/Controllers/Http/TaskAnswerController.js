'use strict'

const Task = use('App/Models/Task')
const TaskAnswer = use('App/Models/TaskAnswer')

class TaskAnswerController {

  // async index ({ request, params }) {

  //     const tasks = await TaskAnswer.query()
  //     .where('done', true)
  //     .with('task')
  //     .fetch()

  //     return tasks
  // }

  async store ({ request, response, auth }) {

    const { task_id, idsImages } = request.only([
      'task_id',
      'idsImages',
    ])

    const task = await Task.findOrFail(task_id)

    if (task) {
      task.status = 'Para Aprovação';
      await task.save();
    }

    const sent = true;

    for(let i in idsImages) {
      const file_id = idsImages[i]
      let data = {task_id, file_id, sent}

      await TaskAnswer.create(data)
    }

    return task_id
  }
}

module.exports = TaskAnswerController
