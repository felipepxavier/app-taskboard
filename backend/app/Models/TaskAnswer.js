'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TaskAnswer extends Model {

  image () {
    return this.hasMany('App/Models/File', 'file_id', 'id');
  }

  task () { /** essa resposta pertence a uma Task */
    return this.belongsTo('App/Models/Task')
  }

  // answers () {
  //   return this.belongsToMany('App/Models/File','task_id','file_id').pivotTable('task_id_images')
  // }

}

module.exports = TaskAnswer
