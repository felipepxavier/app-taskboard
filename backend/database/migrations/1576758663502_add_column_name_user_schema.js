'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnNameUserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table
        .string('name')
    })
  }

  down () {
    this.alter('users', (table) => {
      table.dropColumn('name');
    });
  }
}

module.exports = AddColumnNameUserSchema
