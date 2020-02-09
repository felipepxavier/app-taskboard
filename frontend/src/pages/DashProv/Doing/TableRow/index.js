import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateTaskRequest } from '~/store/modules/task/actions';

import { Task } from './styles';

import history from '~/services/history';

import PreviewModal from '~/components/PreviewModal';


export default function TableRow(props) {

  const profile = useSelector(state => state.user.profile);
  const editing_task = useSelector(state => state.task.editing_task);

  const dispatch = useDispatch();

  const handleCommit = () => {
    // const id_current = props.obj.id;
    // const provider_id = profile.id;

    // const data = {
    //   provider_id
    // }

    // dispatch(updateTaskRequest( id_current, data ));
  }

  return (
      <Task>

        <td>
          <PreviewModal task={props.obj}/>
        </td>

        <td className={(
          props.obj.priorityValue === 'Baixa') ?
          'baixa' :
          (props.obj.priorityValue === 'Alta') ?
          'alta' :
          (props.obj.priorityValue === 'Média') ?
          'media' :''}>
            {props.obj.priorityValue}
          </td>

        <td>
          {props.obj.deliveryDate}
        </td>

        <td onClick={handleCommit} className="btn-commit">
         Entregar
        </td>

      </Task>

  );
}
