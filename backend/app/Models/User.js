'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

/*
  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }*/

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  // projects () {
  //   /** um User pode ter vários Project */
  //   return this.hasMany('App/Models/Project')
  // }

  tasks () { /** um User pode ter várias Task */
    return this.hasMany('App/Models/Task')
  }

  file () {/**add */
    return this.hasOne('App/Models/File')
  }
}

module.exports = User
