'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  static boot () {
    super.boot()
    /** disparar depois da Task ser criada ou alterada */
    // this.addHook('afterCreate', 'TaskHook.sendNewTaskMail')
    // this.addHook('beforeUpdate', 'TaskHook.sendNewTaskMail')
  }

  provider () {/** a Task pertence a um Provider */
    return this.belongsTo('App/Models/Provider')

  }

  user () {/** a Task pertence a um User */
    return this.belongsTo('App/Models/User')
  }

  files () {
    return this.hasMany('App/Models/File')
  }

  images () {
    return this.belongsToMany('App/Models/File','task_id','file_id').pivotTable('task_id_images')
  }

}

module.exports = Task
