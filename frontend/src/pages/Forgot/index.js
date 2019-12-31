import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInForgot } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function Forgot() {
  const dispatch = useDispatch();
  function handleSubmit({ email }) {
    dispatch(signInForgot(email));
  }
  return (
    <>
      <h1>Recuperar senha</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />

        <button type="submit">Recuperar</button>
        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}
