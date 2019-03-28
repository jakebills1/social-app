import React from 'react';
import { Menu, FormButton, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider'
class Navbar extends React.Component  {

  rightNav = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
          name="Logout"
          onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
            id="login"
            name="Login"
            />
          </Link>
          <Link to="/Register">
            <Menu.Item
            id="login"
            name="Register"
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <Menu color="blue" inverted>
        <Menu.Item header>MyFace</Menu.Item>
        <Link to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </Link>
        <Link to="/friends">
          <Menu.Item>
            Friends
          </Menu.Item>
        </Link>
        {this.rightNav()}
      </Menu>
    )
  }
}

export const ConnectedNav = (props) => (
  <AuthConsumer>
    {auth => <Navbar {...props } auth={auth} />}
  </AuthConsumer>
)
  

export default withRouter(ConnectedNav); 