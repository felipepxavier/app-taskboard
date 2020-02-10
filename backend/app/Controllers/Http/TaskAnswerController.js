'use strict'

const TaskAnswer = use('App/Models/TaskAnswer')

class TaskAnswerController {

  async store ({ request, response, auth }) {

    const task_id = request.input('task_id')
    const imgAnswer = request.input('imgAnswer')
    const sent = request.input('sent')

    const data = {
      task_id,
      imgAnswer,
      sent
    }

    const task_answer = await TaskAnswer.create(data)

    return task_answer

  }
}

module.exports = TaskAnswerController
