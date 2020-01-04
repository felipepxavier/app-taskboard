import React from 'react';

import { Task } from './styles';

import ButtonAction from '../ButtonAction';
import { Tooltipped } from 'react-md';

export default function TableRow(props) {
  return (

      <Task>
            <td>{props.obj.title}</td>
            <Tooltipped
                label={props.obj.provider.name}
                position="top"
                setPosition
              >
            <td className="avatar-prov">{
                <img
                  src={
                    props.obj.provider.file.url ||
                    'https://api.adorable.io/avatars/51/abott@adorable.png'
                  }
                  alt="Foto perfil"
                />
            }</td>
            </Tooltipped>
            <td>{props.obj.status}</td>
            <td className={(
              props.obj.priorityValue === 'Baixa') ?
              'baixa' :
              (props.obj.priorityValue === 'Alta') ?
              'alta' :
              (props.obj.priorityValue === 'Média') ?
              'media' :''}>{props.obj.priorityValue}</td>
            <td>{props.obj.deliveryDate}</td>
            <td className="btn-action"><ButtonAction /></td>

        </Task>

  );
}
