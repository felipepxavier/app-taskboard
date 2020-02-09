import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateTaskRequest } from '~/store/modules/task/actions';

import { Task } from './styles';

import PreviewModal from '~/components/PreviewModal';

export default function TableRow(props) {

  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const handleAccept = () => {
    const id_current = props.obj.id;
    const provider_id = profile.id;

    const data = {
      provider_id
    }

    dispatch(updateTaskRequest( id_current, data ));
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

        <td onClick={handleAccept} className="btn-accept">
         Aceitar
        </td>

      </Task>

  );
}
