import React from 'react';
import { MenuButtonColumn, SVGIcon } from 'react-md';
import { withRouter } from 'react-router-dom';

import {Link} from 'react-router-dom';

import { MdMoreVert, MdDelete, MdModeEdit } from 'react-icons/md';

function menuItems({getId, getTitle}){
  return(
    [{
      leftIcon: <MdModeEdit size={20} />,
      component: Link,
      to:{ pathname: '/edit-task/'+getId, state: {modal: true }},
      primaryText: 'Editar',
    }, { divider: true }, {
      leftIcon: <MdDelete  className="md-text--error" size={20} />,
      component: Link,
      to:{ pathname: '/delete-task/'+getId, state: {modal: true, title: getTitle }},
      primaryText: <span className="md-text--error">Deletar</span>,
    }]
  )
};

const ButtonAction = props => (
  <MenuButtonColumn
    icon
    menuItems={menuItems(props)}
    listClassName="tables__with-menus__kebab-list"
  >
    <MdMoreVert />
  </MenuButtonColumn>
);

export default withRouter(ButtonAction);
