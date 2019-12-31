import React, { PureComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

import history from '~/services/history';

import {
  Button,
  DialogContainer
} from 'react-md';

export default function Profile() {
  const [ visible, setVisible ] = useState(false);

  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  const show = () => {
    setVisible(true);
  }

  const hide = () => {
    setVisible(false);
  }

  const handleSignOut = () => {
    dispatch(signOut())
    history.push('/')
  }

  const actions = [];
  actions.push({ secondary: true, children: 'Não', onClick: hide });
  actions.push(<Button flat primary onClick={handleSignOut}>Sim</Button>);

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="file_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>


      <div>
        <Button raised onClick={show}>Sair</Button>
        <DialogContainer
          id="simple-action-dialog"
          visible={visible}
          onHide={hide}
          actions={actions}
          title="Deseja realmente sair?"
        >
        </DialogContainer>
      </div>
    </Container>
  );
}
