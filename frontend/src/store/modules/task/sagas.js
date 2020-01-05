import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { createTaskSuccess, createFailure, updateTaskSuccess, updateFailure } from './actions';

export function* createTask({ payload }) {

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

     yield put(createTaskSuccess(task));

    // history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao criar a tarefa');
    yield put(createFailure());
  }
}

export function* updateTask({ payload }) {

  try {
    const {
      title,
      description,
      priorityValue,
      deliveryDate } = payload.data;

      const id_current = payload.id_current;

    const response = yield call(api.put, `tasks/${id_current}`, {
      title,
      description,
      priorityValue,
      deliveryDate,
    });
    // history.push('/')

    toast.success('Tarefa atualizada com sucesso!');

    const task = response.data;

     yield put(updateTaskSuccess(task));

    // history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na atualização da tarefa');
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@task/CREATE_TASK_REQUEST', createTask),
  takeLatest('@task/UPDATE_TASK_REQUEST', updateTask)
]);
