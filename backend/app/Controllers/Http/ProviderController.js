'use strict'

const Provider = use('App/Models/Provider')

class ProviderController {

  async store({ request }){
    const data = request.only([
      'name',
      'username',
      'email',
      'password',
      'file_id'
      ])

    const provider = await Provider.create(data)

    return provider
  }
}

module.exports = ProviderController
