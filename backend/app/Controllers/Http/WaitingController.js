'use strict'

const Task = use('App/Models/Task')
const TaskAnswer = use('App/Models/TaskAnswer')

class WaitingController {

    async index ({ auth }) {

      const user_id = auth.user.id;

      const task = await Task.query()
      .where('user_id', user_id)
      .with('answers')
      .fetch()

      const tasksAnswer = await TaskAnswer.query()
      .where('sent', true)
      .fetch()

      const tasks_answer = tasksAnswer.toJSON()
      const taskAll = task.toJSON()

      let taskPassed = [];

      taskAll.map( task => {

        tasks_answer.map(answer => {
          if (task.id === answer.task_id) {
            taskPassed = [...taskPassed, task]
          }
        });

      });

      let result = [];
      function removeDuplicates(array, key) {
        let lookup = {};

        for(let i=0; i<array.length; i++) {
            if(!lookup[array[i][key]]){
                lookup[array[i][key]] = true;
                result.push(array[i]);
            }
        }
        return result;
      }

      removeDuplicates(taskPassed, 'id');

      return result;

    }
}

module.exports = WaitingController
