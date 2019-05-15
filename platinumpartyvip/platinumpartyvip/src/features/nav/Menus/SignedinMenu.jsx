import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

<<<<<<< HEAD:platinumpartyvip/src/features/nav/Menus/SignedinMenu.jsx
const SignedInMenu = ({signOut, currentUser}) => {
=======
const SignedInMenu = ({signOut}) => {
>>>>>>> 6d504f2466f0bc937d93a4fc120ad0ef9416fa1f:platinumpartyvip/platinumpartyvip/src/features/nav/Menus/SignedinMenu.jsx
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text={currentUser}>
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
