'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user () {/** este Project pertence a um User */
    return this.belongsTo('App/Models/User')
  }

  tasks () {/** um Project pode ter várias Tasks associadas a ele */
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
