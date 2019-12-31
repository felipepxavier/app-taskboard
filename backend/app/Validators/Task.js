'use strict'

const Antl = use('Antl')

class Task {
  get rules () {
    return {
      title: 'required',
      deliveryDate: 'date'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Task
