'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvidersSchema extends Schema {
  up () {
    this.create('providers', (table) => {
      table.increments()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name')
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('token')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('providers')
  }
}

module.exports = ProvidersSchema
