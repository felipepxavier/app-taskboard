import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Choice } from '@rocketseat/unform';
import * as Yup from 'yup';

import {Container} from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  userMode: Yup.string()
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({email, password, userMode }) {
    console.log(email, password, userMode)
    dispatch(signInRequest(email, password, userMode));
  }

  const initialData = {
    userMode: 'A',
  };

  return (
    <>
      <h1>Login</h1>
      <Form schema={schema} onSubmit={handleSubmit}  initialData={initialData}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <Container>
          <Choice
            name="userMode"
            options={[{ value: 'A', label: 'Cliente' }, { value: 'B', label: 'Prestador' }]}
          />
        </Container>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

        <Link to="/forgot">
          <h4>Esqueci minha senha</h4>
        </Link>
      </Form>
    </>
  );
}
