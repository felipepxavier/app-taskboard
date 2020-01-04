import React from 'react';
import { MenuButtonColumn, SVGIcon } from 'react-md';

import {Link} from 'react-router-dom';

import { MdMoreVert } from 'react-icons/md';

const menuItems = [{
  // leftIcon: <SVGIcon use={info.url} />,
  component: Link,
  to: '/edit-task/:id',
  primaryText: 'Editar',
}, { divider: true }, {
  // leftIcon: <SVGIcon use={deleteIcon.url} className="md-text--error" />,
  primaryText: <span className="md-text--error">Deletar</span>,
}];

const ButtonAction = props => (
  <MenuButtonColumn
    icon
    menuItems={menuItems}
    listClassName="tables__with-menus__kebab-list"
  >
    <MdMoreVert />
  </MenuButtonColumn>
);

export default ButtonAction;
