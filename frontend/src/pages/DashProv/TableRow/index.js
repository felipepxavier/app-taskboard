import React from 'react';

import { Task } from './styles';

// import ButtonAction from '../ButtonAction';

import PreviewModal from '../../Dashboard/TableRow/PreviewModal';

export default function TableRow(props) {
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

        <td className="btn-action">
          {/* <ButtonAction getTitle={props.obj.title} getId={props.obj.id} /> */}
        </td>

      </Task>

  );
}
