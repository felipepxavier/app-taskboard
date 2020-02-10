import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/images/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);


  // const handleBtnActive = () => {
  //   const btnContainer = document.querySelector('.nav');
  //   const btns = btnContainer.getElementsByClassName("btn");

  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function() {
  //       const current = document.getElementsByClassName("active");
  //       current[0].className = current[0].className.replace(" active", "");
  //       this.className += " active";
  //     });
  //   }
  // };

  //  window.addEventListener("load", function() {
  //         handleBtnActive();
  //       }
  //   );

  const handleMenu = () => {

    if (profile.provider) {
      return (
        <>
          <Link className="btn active" to="/dash-prov">Dashboard</Link>,
          <Link className="btn" to="/doing">Doing</Link>,
          <Link className="btn" to="/done-prov">Done</Link>
        </>
      )
    }else {
      return (
        <>
          <Link className="btn active" to="/dashboard">Dashboard</Link>,
          <Link className="btn" to="/waiting">Para Aprovação</Link>,
          <Link className="btn" to="/done">Concluídos</Link>
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
