'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TaskIdImage extends Model {

  image () {
    return this.hasMany('App/Models/File', 'file_id', 'id');
  }

}

module.exports = TaskIdImage
