'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NameUserSchema extends Schema {
  up () {
    this.alter('tasks', (table) => {
      table.string('chat');
    })
  }

  down () {
    this.table('tasks', (table) => {
      table.dropColumn('chat');
    })
  }
}

module.exports = NameUserSchema
