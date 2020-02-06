import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password, userMode } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
      userMode
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    if (user.provider) {
      console.log('é provider');
      history.push('/dash-prov');
      return
    }else {
      console.log('nao é');
      console.log(user.provider);
      history.push('/dashboard');
      return
    }

  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    console.log(err)
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
