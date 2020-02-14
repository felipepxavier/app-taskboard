import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateTaskRequest } from '~/store/modules/task/actions';

import { Task } from './styles';

import history from '~/services/history';

import PreviewModal from '~/components/PreviewModal';

import AnswerModal from '../AnswerModal';

export default function TableRow(props) {

  const profile = useSelector(state => state.user.profile);
  const editing_task = useSelector(state => state.task.editing_task);

  const dispatch = useDispatch();

  const handleCommit = () => {

    return (
      <AnswerModal task={props.obj.id} />
    )

    // const id_current = props.obj.id;
    // const provider_id = profile.id;

    // const data = {
    //   provider_id
    // }

    // dispatch(updateTaskRequest( id_current, data ));
  }


  const handleAnswer = () => {
    const data = props.obj.answers;
    const data2 = props.obj;
    console.log(data)
    console.log(data2)
  }

  return (
      <Task>

        <td>
          <PreviewModal task={props.obj}/>
        </td>

        <td className="btn-answer" onClick={handleAnswer}>
          Visualizar
        </td>


        <td className="btn-commit" onClick={handleCommit}>
          Aprovar
        </td>

      </Task>

  );
}
