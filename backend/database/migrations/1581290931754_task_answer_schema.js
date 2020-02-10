'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskAnswerSchema extends Schema {
  up () {
    this.create('task_answers', (table) => {
      table.increments()
      table
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.boolean('sent')
      table.boolean('done')
      table.timestamps()
    })
  }

  down () {
    this.drop('task_answers')
  }
}

module.exports = TaskAnswerSchema
