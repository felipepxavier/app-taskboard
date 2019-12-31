'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Provider extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  tasks () { /** um User pode ter várias Task */
    return this.hasMany('App/Models/Task')
  }

  file () {/**add */
    return this.hasOne('App/Models/File')
  }
}

module.exports = Provider
