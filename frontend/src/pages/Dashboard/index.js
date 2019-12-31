import React, {useState} from 'react';

import Task from './Task';

import { Container, TaskForm, TaskList } from './styles';

export default function Dashboard() {

  return (

    <Container>
      <Task />
      <TaskList />
    </Container>
  )
}
