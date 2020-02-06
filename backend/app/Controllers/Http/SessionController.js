'use strict'

const User = use('App/Models/User')
const Provider = use('App/Models/Provider')
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

      const provider = false;

      const user = {
        id,
        name,
        username,
        email,
        provider,
        avatar
      }

      return response.json({
        user,
        token
      });

    }

    if (userMode ==='B') {

      const tokenData = await auth.authenticator('session2').attempt(email, password)
      const userData = await Provider.findBy('email', email)

      const { id, name, username, file_id } = userData
      const { token } = tokenData

      const avatar = await File
        .query()
        .where('id', file_id)
        .first()

      const provider = true;

      const user = {
        id,
        name,
        username,
        email,
        provider,
        avatar
      }

      return response.json({
        user,
        token
      });
    }

  }
}

module.exports = SessionController
