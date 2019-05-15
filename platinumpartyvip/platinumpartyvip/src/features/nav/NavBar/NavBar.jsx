import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
<<<<<<< HEAD:platinumpartyvip/src/features/nav/NavBar/NavBar.jsx
import { openModal } from '../../modals/modalActions'
import { logout } from '../../auth/authActions'

const actions = {
  openModal,
  logout
}

const mapState = (state) => ({
  auth: state.auth
})
=======
>>>>>>> 6d504f2466f0bc937d93a4fc120ad0ef9416fa1f:platinumpartyvip/platinumpartyvip/src/features/nav/NavBar/NavBar.jsx

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push('/')
  };

  render() {
    const { auth} = this.props;
    const authenticated = auth.authenticated
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
<<<<<<< HEAD:platinumpartyvip/src/features/nav/NavBar/NavBar.jsx
            Platinum Party VIP
=======
            Re-vents
>>>>>>> 6d504f2466f0bc937d93a4fc120ad0ef9416fa1f:platinumpartyvip/platinumpartyvip/src/features/nav/NavBar/NavBar.jsx
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated &&
          <Menu.Item as={NavLink} to="/people" name="People" />}

          {authenticated &&
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>}
          {authenticated ? (
            <SignedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapState, actions)(NavBar));
