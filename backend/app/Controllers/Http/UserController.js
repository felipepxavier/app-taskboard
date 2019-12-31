'use strict'

const User = use('App/Models/User')
const File = use('App/Models/File')
const Hash = use('Hash')

class UserController {
  async store({ request }){
    const data = request.only([
      'name',
      'username',
      'email',
      'password',
      'file_id'
      ])

    const user = await User.create(data)

    return user
  }

  async update({ request, response, auth }) {

      const { file_id, name, email, oldPassword, password, confirmPassword } = request.only([
        'file_id',
        'name',
        'email',
        'oldPassword',
        'password',
        'confirmPassword'
      ]);

      const userId = auth.user.id;

      const user = await User.findByOrFail('id', userId)
      const isIqual = await Hash.verify(oldPassword, user.password)

      if (oldPassword && !isIqual) {
        return response
        .status(400)
        .json({ error: 'Password does not match' });
      }

      const value = {
        file_id,
        name,
        email,
        password
      }

      user.merge(value);
      await user.save();

      // const avatarUm = await user.file().fetch();
      // console.log(avatarUm)

      const avatar = await File.query()
      .where('id', file_id)
      .first()

      return {
        name,
        email,
        avatar
      }
  }
}

module.exports = UserController
