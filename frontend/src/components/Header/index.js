import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/images/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  // console.log(profile)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Kusko" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/51/abott@adorable.png'
              }
              alt="Foto perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
