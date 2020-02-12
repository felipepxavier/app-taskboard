'use strict'

const Task = use('App/Models/Task')
const TaskAnswer = use('App/Models/TaskAnswer')

class WaitingController {

    async index ({ auth }) {

      const user_id = auth.user.id;

/*** ================================================= */

// function removeRows(prev, next) {

//   let listTask = [];

//   if(prev && next) {

//     if ( next.taskC.id == prev.taskC.id) {
//       let task = prev.taskC;
//       let img = prev.ansC;
//       let img2 = next.ansC;

//       const row = {
//         data:{
//           task,
//           img,
//           img2
//         }
//         };
//       listTask= row;
//     }
//   }

//   console.log(listTask)
// }


      const tasksAnswer = await TaskAnswer.query()
        .where('sent', true)
        .with('task')
        .with('image')
        .fetch()

      const tasks_answer = tasksAnswer.toJSON()

      // let taskPassed = [];
      let passed = [];
      // taskPassed = tasks_answer;
      let list = []
      tasks_answer.map( (answer, index) => {

        if (answer.task.user_id === user_id ) {
          // taskPassed.splice(index, 1)
          let taskC = answer.task
          let ansC = answer.image

          let val = { taskC, ansC }
          passed = [...passed, val]

        }

        passed.map( item => {
          console.log(item.taskC)

          if (list) {
            list = [...list, item]

           ]
          }
        })
      });


      return passed


        // const all_tasks = tasks.toJSON()
        // const tasks_answer = tasksAnswer.toJSON()

        // let taskPassed = [];
        // taskPassed = all_tasks;

        // tasks_answer.map( answer => {
        //   let isAnswer = answer.task_id

        //   all_tasks.map((item, index) => {
        //       let idTask = item.id

        //       if(idTask === isAnswer) {
        //         taskPassed.splice(index, 1)
        //       }
        //   })
        // })


    }
}

module.exports = WaitingController
