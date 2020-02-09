'use strict'

const Route = use('Route')

Route.post('tasks', 'TaskController.store').middleware(['auth'])

Route.get('allTasks/:provider', 'TaskController.index').middleware('auth:session2,jwt');

Route.get('tasks/:id', 'TaskController.show').middleware(['auth'])
Route.put('tasks/:id', 'TaskController.update')
Route.delete('tasks/:id', 'TaskController.destroy')

// Route.put('taskAccept/:id', 'TaskController.update')

Route.post('users', 'UserController.store').validator('User')
Route.put('users', 'UserController.update').middleware(['auth'])

Route.post('providers', 'ProviderController.store').validator('Provider')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')

Route.get('/files/:id', 'FileController.show')
Route.delete('/files/:id', 'FileController.destroy')

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



