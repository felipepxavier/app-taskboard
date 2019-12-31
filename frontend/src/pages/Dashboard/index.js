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

      setTask(data);
    }
    loadTask();
  });

  return (

    <Container>
      <TaskDialog />
      <ul>
      { task.map(task => (

        <Task key={task.id}>
          <strong>{task.title}</strong>
          <strong>{task.description}</strong>
          <strong>{task.deliveryDate}</strong>
          <strong>{task.priorityValue}</strong>
          <strong>{task.status}</strong>

        </Task>

        ))}
      </ul>

    </Container>
  )
}
