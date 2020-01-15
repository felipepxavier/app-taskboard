'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskIdImagesSchema extends Schema {
  up () {
    this.create('task_id_images', (table) => {
      table.increments()
      table
        .integer('task_id')
        .unsigned()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('task_id_images')
  }
}

module.exports = TaskIdImagesSchema
