import React from 'react';
import { MenuButtonColumn, SVGIcon } from 'react-md';

import { MdMoreVert } from 'react-icons/md';

// import info from 'icons/info_outline.svg';
// import download from 'icons/file_download.svg';
// import duplicate from 'icons/content_copy.svg';
// // import deleteIcon from 'icons/delete.svg';
import more from '~/assets/icons/more-vert.svg';

const menuItems = [{
  // leftIcon: <SVGIcon use={info.url} />,
  primaryText: 'Editar',
}, { divider: true }, {
  // leftIcon: <SVGIcon use={deleteIcon.url} className="md-text--error" />,
  primaryText: <span className="md-text--error">Deletar</span>,
}];

const ButtonAction = props => (
  <MenuButtonColumn {...props} icon menuItems={menuItems} listClassName="tables__with-menus__kebab-list">
    <MdMoreVert />
  </MenuButtonColumn>
);

export default ButtonAction;
