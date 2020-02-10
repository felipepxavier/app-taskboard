import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/images/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const handleMenu = () => {

    if (profile.provider) {
      return (
        <>
          <NavLink className="btn" activeClassName="active" to="/dash-prov">Dashboard</NavLink>,
          <NavLink className="btn" activeClassName="active" to="/doing">Doing</NavLink>,
          <NavLink className="btn" activeClassName="active" to="/done-prov">Done</NavLink>
        </>
      )
    }else {
      return (
        <>
          <NavLink className="btn" activeClassName="active" to="/dashboard">Dashboard</NavLink>,
          <NavLink className="btn" activeClassName="active" to="/waiting">Para Aprovação</NavLink>,
          <NavLink className="btn" activeClassName="active" to="/done">Concluídos</NavLink>
        </>
      )
    }
  }

  return (
    <Container>
      <Content>
        <nav className="nav">
          <img src={logo} alt="Kusko" />
          { handleMenu()}
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
