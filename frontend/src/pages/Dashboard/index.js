import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import TaskModal from './TaskModal';

import api from '~/services/api';

import { Container } from './styles';

import TableRow from './TableRow';

export default function Dashboard() {

  const [task, setTask] = useState([]);
  const newTask = useSelector(state => state.task.taskCurrent);

  useEffect(() => {
    async function loadTask() {
      const response = await api.get('tasks');
      const data = response.data;
      setTask(data);
    }
    loadTask();
    console.log('executando ainda --" ');
  }, [newTask]);

  function taskRow() {
    return task.map(( task, i ) => {
      return(
        <TableRow obj={task} key={i} />
      )
    })
  };

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
