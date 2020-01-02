import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import TaskDialog from './TaskDialog';
import ButtonAction from './ButtonAction';

import api from '~/services/api';

import { Container, Task } from './styles';
import { Tooltipped } from 'react-md';


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
      {

      task.map(task => (

        <tbody key={task.id}>
          <Task>

                <td>{task.title}</td>
                <Tooltipped
                    label={task.provider.name}
                    position="top"
                    setPosition
                  >
                <td className="avatar-prov">{
                    <img
                      src={
                        task.provider.file.url ||
                        'https://api.adorable.io/avatars/51/abott@adorable.png'
                      }
                      alt="Foto perfil"
                    />
                }</td>
                </Tooltipped>
                <td>{task.status}</td>
                <td className={(
                  task.priorityValue === 'Baixa') ?
                  'baixa' :
                  (task.priorityValue === 'Alta') ?
                  'alta' :
                  (task.priorityValue === 'Média') ?
                  'media' :''}>{task.priorityValue}</td>
                <td>{task.deliveryDate}</td>
                <td className="btn-action"><ButtonAction /></td>

            </Task>
        </tbody>
        ))}
    </table>

    </Container>
  )
}
