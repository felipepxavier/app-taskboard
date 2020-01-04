import React from 'react';

// import { Container } from './styles';
import TaskModalEdit from '../TaskModalEdit';

export default function EditTask(props) {

  const { match } = props;

  let {id} = match.params;
  console.log(id)

  return (
    console.log('entrou no edit!'),
    <TaskModalEdit idForValue={id} />

  );
}
