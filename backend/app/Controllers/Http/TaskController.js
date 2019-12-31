'use strict'

const Task = use('App/Models/Task')


class TaskController {

  async index ({ params }) {
    const tasks = await Task.query()
      .where('project_id', params.projects_id)
      .with('user')
      .fetch()

      return tasks
  }

  async store ({ request, response, auth }) {

    const { title, description, priorityValue, deliveryDate, status, provider_id, file_id } = request.only([
      'title',
      'description',
      'priorityValue',
      'deliveryDate',
      'provider_id',
      'status',
      'file_id'
    ])

    const user_id = auth.user.id;

    const data = {
      user_id,
      title,
      description,
      priorityValue,
      deliveryDate,
      status,
      provider_id,
      // file_id
    }

    //const task = await Task.create({ ...data, project_id: params.projects_id })
    const task = await Task.create(data)

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
      'provider_id',
      'status',
      'file_id'
    ])

    task.merge(data)

    await task.save()

    return task
  }


  async destroy ({ params }) {
    const task = await Task.findOrFail(params.id)

    await task.delete()
  }

}

module.exports = TaskController
