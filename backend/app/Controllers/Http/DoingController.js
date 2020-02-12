'use strict'

const Task = use('App/Models/Task')
const TaskAnswer = use('App/Models/TaskAnswer')

class DoingController {

  async index () {
    const tasks = await Task.query()
      .with('provider.file')
      .with('images')
      .fetch()

      const tasksAnswer = await TaskAnswer.query()
      .where('sent', true)
      .with('task')
      .fetch()

      const all_tasks = tasks.toJSON()
      const tasks_answer = tasksAnswer.toJSON()

      let taskPassed = [];
      taskPassed = all_tasks;

      tasks_answer.map( answer => {
        let isAnswer = answer.task_id

        all_tasks.map((item, index) => {
            let idTask = item.id

            if(idTask === isAnswer) {
              taskPassed.splice(index, 1)
            }
        })
      })

      return taskPassed
  }

  async store ({ request }) {

    const { task_id, chat, idsImages } = request.only([
      'task_id',
      'chat',
      'idsImages',
    ])

    const task = await Task.findOrFail(task_id)

    if (task) {
      task.status = 'Para Aprovação';
      task.chat = chat;
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

module.exports = DoingController
