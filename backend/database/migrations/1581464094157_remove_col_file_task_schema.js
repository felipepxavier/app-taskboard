'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NameUserSchema extends Schema {
  up () {
    this.alter('tasks', (table) => {
      table.dropColumn('file_id');
    })
  }

  down () {
    this.table('tasks', (table) => {
      table.string('file_id');
    })
  }
}

module.exports = NameUserSchema
