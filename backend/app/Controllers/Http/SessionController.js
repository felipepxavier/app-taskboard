'use strict'

const User = use('App/Models/User')
const File = use('App/Models/File')

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all()

    const tokenData = await auth.attempt(email, password)

   const userData = await User.findByOrFail('email', email)

   const { id, name, username, file_id } = userData

   const { token } = tokenData

   const avatar = await File
    .query()
    .where('id', file_id)
    .first()

    /*
    .query()
    .where('id', file_id)
    .with('model_para_fetch')
    .first()
    */

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
}

module.exports = SessionController
