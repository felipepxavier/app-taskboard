import React from 'react';
import { MenuButtonColumn, SVGIcon } from 'react-md';
import { withRouter } from 'react-router-dom';

import {Link} from 'react-router-dom';

import { MdMoreVert } from 'react-icons/md';

function menuItems(props){
  return(
    [{
    // leftIcon: <SVGIcon use={info.url} />,
      component: Link,
      to:{ pathname: '/modal/'+props, state: {modal: true }},
      primaryText: 'Editar',
    }, { divider: true }, {
      // leftIcon: <SVGIcon use={deleteIcon.url} className="md-text--error" />,
      primaryText: <span className="md-text--error">Deletar</span>,
    }]
  )
};

const ButtonAction = props => (
  <MenuButtonColumn
    icon
    menuItems={menuItems(props.getId)}
    listClassName="tables__with-menus__kebab-list"
  >
    <MdMoreVert />
  </MenuButtonColumn>
);

export default withRouter(ButtonAction);
