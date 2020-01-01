import React, {useState, useEffect} from 'react';

import TaskDialog from './TaskDialog';

import api from '~/services/api';

import { Container, Task } from './styles';

export default function Dashboard() {

  const [task, setTask] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const response = await api.get('tasks');
      const data = response.data;
      console.log(data)
      setTask(data);
    }
    loadTask();
  }, [task]);

  return (

    <Container>
      <TaskDialog />
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
      { task.map(task => (

        <tbody>
          <Task key={task.id}>

                <td>{task.title}</td>
                <td>{task.provider.name}</td>
                <td>{task.status}</td>
                <td className={(
                  task.priorityValue === 'Baixa') ?
                  'baixa' :
                  (task.priorityValue === 'Alta') ?
                  'alta' :
                  (task.priorityValue === 'Média') ?
                  'media' :''}>{task.priorityValue}</td>
                <td>{task.deliveryDate}</td>

            </Task>
        </tbody>
        ))}
    </table>

    </Container>
  )
}
