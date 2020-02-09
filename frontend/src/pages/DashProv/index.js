import React, {useState, useMemo, useEffect} from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

import api from '~/services/api';

import TableRow from './TableRow';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function DashProv() {
  const [currentSort, setCurrentSort] = useState('up');
  const [task, setTask] = useState([]);

  const profile = useSelector(state => state.user.profile);
  const editing_task = useSelector(state => state.task.editing_task);

  let myRows = task.filter(( elem ) => (elem.provider_id !== profile.id) && ( elem.provider_id === 2));

  useEffect(() => {
    async function loadTask() {
      const response = await api.get('allTasks/true');
      const data = response.data;

      setTask(data);
    }
    loadTask();
  }, []);

  useMemo(() => {
    if (editing_task) {

      let newTask = editing_task.find(element => element);

      let old_task = task.find(element => element.id === newTask.id);
      for( var i = 0; i < task.length; i++){
        if ( task[i] === old_task) {
          task.splice(i, 1);
          setTask(task);
        }
      }
    }
  }, [editing_task]);

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

  function ViewHeader(list) {
    if (list && list.length !== 0) {
      return (
        <>
          <th><h1>Tarefa</h1></th>
          <th><h1>Prioridade</h1></th>
          <th><h1>Entrega</h1></th>
          <th><h1>Ação</h1></th>
        </>
      )
    } else {
      return <p className="notTask">Sem novas tarefas! =(</p>
    }
  }

  function btnSortTable() {
    if (myRows && myRows.length !== 0){
      return(
        <button className="btn-sort" onClick={onSortChange}>
          {sortTypes[currentSort].mode}
        </button>
      )
    }
  }


  function taskRow() {
    return (
      <>
       { btnSortTable() }
        {
          [...myRows].sort(sortTypes[currentSort].fn).map(obj => (
              <TableRow obj={obj} key={obj.id} />
          ))
        }
      </>
    )
  };

  return (
    <Container>
      <table className="container">
        <thead>
          <tr>
            {ViewHeader(myRows)}
          </tr>
        </thead>

        <tbody>{taskRow()}</tbody>
      </table>
    </Container>
  );
}
