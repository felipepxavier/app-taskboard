import React, {useState, useMemo, useEffect} from 'react';

import { Container } from './styles';

import api from '~/services/api';

import TableRow from './TableRow';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function DashProv() {
  const [currentSort, setCurrentSort] = useState('up');
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function loadTask() {
      const response = await api.get('tasks');
      const data = response.data;
      console.log(data)
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


  return (
    <Container>
      <table className="container">
        <thead>
          <tr>
            <th><h1>Tarefa</h1></th>
            <th><h1>Entrega</h1></th>
            <th><h1>Prioridade</h1></th>
            <th><h1>Ação</h1></th>
          </tr>
        </thead>

        <tbody>{taskRow()}</tbody>
    </table>

      </Container>
  );
}
