'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NameUserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table
        .string('name')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('name');
    })
  }
}

module.exports = NameUserSchema
