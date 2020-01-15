'use strict'

const Task = use('App/Models/Task')
const TaskIdImage = use('App/Models/TaskIdImage')
const File = use('App/Models/File')


class TaskController {

  async index ({ request, response, auth }) {
    const user_id = auth.user.id;

    const tasks = await Task.query()
      .where('user_id', user_id)
      .with('provider.file')
      .fetch()

    return tasks
  }

  async store ({ request, response, auth }) {

    const { title, description, priorityValue, deliveryDate, status, provider_id } = request.only([
      'title',
      'description',
      'priorityValue',
      'deliveryDate',
      'provider_id',
      'status',
    ])

    const

    images = request.input('idsImages')

    const user_id = auth.user.id;
    // const task_id = 2;
    const data = {
      user_id,
      title,
      description,
      priorityValue,
      deliveryDate,
      status,
      provider_id,
    }

    const taskData = await Task.create(data)

    const { id } = taskData;

    const task = await Task.query()
      .where('id', id)
      .with('provider.file')
      .fetch()


    await taskData.images().attach(images)


    return task
  }

  async show ({ params }) {
    const task = await Task.findOrFail(params.id)

    return task
  }

  async update ({ params, request }) {
    const task = await Task.findOrFail(params.id)

    const data = request.only([
      'title',
      'description',
      'priorityValue',
      'deliveryDate',
      // 'provider_id',
      // 'file_id'
    ])

    task.merge(data)

    await task.save()

    const taskProv = await Task.query()
      .where('id', params.id)
      .with('provider.file')
      .fetch()

    return taskProv
  }


  async destroy ({ params }) {
    const task = await Task.findOrFail(params.id)

    await task.delete()
  }

}

module.exports = TaskController
