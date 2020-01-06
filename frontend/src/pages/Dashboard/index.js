import React, {useState, useMemo, useEffect} from 'react';
import { useSelector } from 'react-redux';

import TaskModal from './TaskModal';

import api from '~/services/api';

import { Container } from './styles';

import TableRow from './TableRow';

export default function Dashboard() {

  const [task, setTask] = useState([]);
  const current_task = useSelector(state => state.task.current_task);
  const editing_task = useSelector(state => state.task.editing_task);
  const removing_task = useSelector(state => state.task.removing_task);

  useEffect(() => {
    async function loadTask() {
      const response = await api.get('tasks');
      const data = response.data;
      setTask(data);
    }
    loadTask();
    console.log('executando ainda --" ');

  }, []);

  function taskRow() {
    return task.map(( task, i ) => {
      return(
        <TableRow obj={task} key={i} />
      )
    })
  };

  useMemo(() => {

    if (current_task) {
      console.log('entrouu :)');

      const newTask = current_task.find(element => element);
      const newList = [...task, newTask]

      setTask(newList)
    }

    if (editing_task) {
      const newTask = editing_task.find(element => element);
      const old_task = task.find(element => newTask.id);
      for( var i = 0; i < task.length; i++){
        if ( task[i] === old_task) {
          task.splice(i, 1);
        }
      }

      const newList = [...task, newTask]
      setTask(newList)
    }

    if (removing_task) {
      const old_task = task.find(element => removing_task);

      for( var i = 0; i < task.length; i++){
        if ( task[i] === old_task) {
          task.splice(i, 1);
        }
      }

      const newList = [...task]
      setTask(newList)
    }

  }, [current_task, editing_task, removing_task]);

  return (

    <Container>
      <TaskModal />
    <table className="container">
        <thead>
          <tr>
            <th><h1>Tarefa</h1></th>
            <th><h1>Proprietário</h1></th>
            <th><h1>Status</h1></th>
            <th><h1>Prioridade</h1></th>
            <th><h1>Entrega</h1></th>
          </tr>
        </thead>

        <tbody>
        {taskRow()}
        </tbody>

    </table>

    </Container>
  )
}
