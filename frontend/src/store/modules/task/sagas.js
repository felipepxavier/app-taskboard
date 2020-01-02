import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { createTaskSuccess, createFailure } from './actions';

export function* createTask({ payload }) {
  //console.log(payload.data);
  try {
    const {
      title,
      description,
      priorityValue,
      deliveryDate } = payload.data;

      const provider_id = 1;
      const status = 'Pendente';

    const response = yield call(api.post, 'tasks', {
      title,
      description,
      priorityValue,
      deliveryDate,
      provider_id,
      status
    });

    toast.success('Tarefa criada com sucesso!');

    const task = response.data;

    //console.log(task);

     yield put(createTaskSuccess(task));

    // history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao criar a tarefa');
    yield put(createFailure());
  }
}

export default all([
  takeLatest('@task/CREATE_TASK_REQUEST', createTask)
]);
