'use strict'

const User = use('App/Models/User')
const File = use('App/Models/File')

class SessionController {
  async store({ request, response, auth }) {
    const { email, password, userMode } = request.all()

    if (userMode === 'A') {

      const tokenData = await auth.attempt(email, password)
      const userData = await User.findBy('email', email)

      const { id, name, username, file_id } = userData

      const { token } = tokenData

      const avatar = await File
        .query()
        .where('id', file_id)
        .first()

      const user = {
        id,
        name,
        username,
        email,
        avatar
      }

      return response.json({
        user,
        token
      });

    }

    if (userMode ==='B') {
      console.log('É um prestdor, bora trampa');
    }

  }
}

module.exports = SessionController
