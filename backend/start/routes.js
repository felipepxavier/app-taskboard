'use strict'

const Route = use('Route')

Route.post('tasks', 'TaskController.store').middleware(['auth'])
Route.get('tasks', 'TaskController.index').middleware(['auth'])
Route.get('tasks/:id', 'TaskController.show').middleware(['auth'])

Route.post('users', 'UserController.store').validator('User')
Route.put('users', 'UserController.update').validator('Profile').middleware(['auth'])

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')

  // Route.resource('projects', 'ProjectController')
  //   .apiOnly()
  //   .validator(new Map(
  //     [
  //       [
  //         ['projects.store'],
  //         ['Project']
  //       ]
  //     ]
  //   ))

  // Route.resource('projects.tasks', 'TaskController')
  //   .apiOnly()
  //   .validator(new Map(
  //     [
  //       [
  //         ['projects.tasks.store'],
  //         ['Task']
  //       ]
  //     ]
  //   ))

}).middleware(['auth'])



