'use strict'

const Antl = use('Antl')

class Profile {
  get validateAll () {
    return true
  }

  get rules () {
    return {
     file_id: 'required',
      name: 'required',
      email: 'required|email|unique:users,email',
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Profile
