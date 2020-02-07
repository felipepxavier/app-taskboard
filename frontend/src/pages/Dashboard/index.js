import React, {useState, useMemo, useEffect} from 'react';
import { useSelector } from 'react-redux';

import TaskModal from './TaskModal';

import api from '~/services/api';

import { Container } from './styles';

import TableRow from './TableRow';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function Dashboard() {

  const [task, setTask] = useState([]);
  const [currentSort, setCurrentSort] = useState('up');

  const current_task = useSelector(state => state.task.current_task);
  const editing_task = useSelector(state => state.task.editing_task);
  const removing_task = useSelector(state => state.task.removing_task);

  useEffect(() => {
    async function loadTask() {
      const response = await api.get('tasks');
      const data = response.data;
      // console.log(data)
      setTask(data);
    }
    loadTask();
  }, []);

  const sortTypes = {
    up: {
      mode: <MdKeyboardArrowUp size={28} />,
      fn: (a, b) => a.id - b.id
    },
    down: {
      mode: <MdKeyboardArrowDown size={28} />,
      fn: (a, b) => b.id - a.id
    }
  };

  const onSortChange = () => {
		let nextSort;
		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'down';
    setCurrentSort(nextSort);
	};

  function taskRow() {
    return (
      <>
        <button className="btn-sort" onClick={onSortChange}>
        {sortTypes[currentSort].mode}
        </button>
        {[...task].sort(sortTypes[currentSort].fn).map(obj => (
            <TableRow obj={obj} key={obj.id} />
        ))}
      </>
    )
  };

  useMemo(() => {
    if (current_task){
      const newTask = current_task.find(element => element);
      const newList = [...task, newTask]
      setTask(newList)
    }
  }, [current_task]);

  useMemo(() => {
    if (removing_task){
      const old_task = task.find(element => element.id == removing_task);
      for( var i = 0; i < task.length; i++){
        if ( task[i] === old_task) {
          task.splice(i, 1);
        }
      }
      const newList = [...task]
      setTask(newList)
    }
  }, [removing_task]);

  useMemo(() => {
  if (editing_task) {
    let newTask = editing_task.find(element => element);
    let old_task = task.find(element => element.id === newTask.id);
    for( var i = 0; i < task.length; i++){
      if ( task[i] === old_task) {
        task.splice(i, 1);
        const newList = [...task, newTask];
        setTask(newList);
      }
    }
  }
}, [editing_task]);

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
