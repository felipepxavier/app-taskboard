import React from 'react';

import { Task } from './styles';

import ButtonAction from '../ButtonAction';
import { Tooltipped } from 'react-md';
import PreviewModal from '~/components/PreviewModal';

export default function TableRow(props) {

  const avatar = (
    props.obj.provider.file ?
    props.obj.provider.file.url :
    'https://api.adorable.io/avatars/51/abott@adorable.png'
    );

  return (
      <Task>
        <td> <PreviewModal task={props.obj}/> </td>

            <Tooltipped
                label={props.obj.provider.name}
                position="top"
                setPosition
              >
            <td className="avatar-prov">{
                <img
                  src={avatar}
                  alt="Foto perfil"
                />
            }</td>
            </Tooltipped>
            <td>{props.obj.status ? props.obj.status : "Pendente" }</td>
            <td className={(
              props.obj.priorityValue === 'Baixa') ?
              'baixa' :
              (props.obj.priorityValue === 'Alta') ?
              'alta' :
              (props.obj.priorityValue === 'Média') ?
              'media' :''}>{props.obj.priorityValue}</td>
            <td>{props.obj.deliveryDate}</td>
            <td className="btn-action"><ButtonAction getTitle={props.obj.title} getId={props.obj.id} /></td>

        </Task>

  );
}
