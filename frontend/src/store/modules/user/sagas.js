import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile( { payload } ) {

    try {
    const { name, email, file_id, ...rest } = payload.data;
    console.log('rest abaixo: tem q ter o oldPassword...')
      console.log(rest)
      const profile = {
        name,
        email,
        file_id,
        ...(rest.oldPassword ? rest : {}),
      };
      console.log('dados enviados ao BD')
      console.log(profile)
      const response = yield call(api.put, 'users', profile);
      toast.success('Perfil atualizado com sucesso!');

      yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o perfil.');
    yield put(updateProfileFailure());
  }

}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
