'use strict'

const File = use('App/Models/File')
const Helpers = use('Helpers')
const TaskIdImage = use('App/Models/TaskIdImage')


class FileController {
  async show ({ params, response }) {
    const file = await File.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${file.file}`))
  }

  /**
   * Create/save a new file.
   * POST files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '6mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro no upload de arquivo.' } })
    }
  }

  async destroy ({ params }) {
    const file = await File.findOrFail(params.id)
    const { id } = file;

    const taskimg = await TaskIdImage.query()
    .where('file_id', id)
    .first()

    if (taskimg) {
      await taskimg.delete()
    }

    await file.delete()
  }
}

module.exports = FileController
