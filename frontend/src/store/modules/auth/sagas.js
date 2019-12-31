import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    /** se nao for um prestador de serviço
    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }* */

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* signInForgot({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'passwords', {
      email,
      redirect_url: 'http://www.meusistema.com/resetar_senha',
    });
    toast.success('Sucesso, abra seu e-mail');
  } catch (err) {
    toast.error('Erro, verifique seu e-mail');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    console.tron.log(token)
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_FORGOT', signInForgot),
]);
