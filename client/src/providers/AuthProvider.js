import React from 'react';
import axios from 'axios';
// create context
const AuthContext = React.createContext();

// export consumer
export const AuthConsumer = AuthContext.Consumer;

// create provider
class AuthProvider extends React.Component {
  state = { user: null, } 
  handleLogin = (user, history) => {
    // hit function, then make axios call, post to /api/auth/sing_in
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/")
      .catch( err => {
        console.log(err)
      })
      })
  } 
  handleLogout = (history) => {
    // hit function, then make axios call, delete to /api/auth/sign_out
    debugger
  }
  handleRegister = (user, history) => {
    // hit function, then make axios call, post to /api/auth
    axios.post("/api/auth", user)
      .then(res => {
        this.setState({ user: res.data.data, })
        history.push("/")
      })
      .catch( err => {
        console.log(err)
      })
  }
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        handleRegister: this.handleRegister,
        setUser: (user) => this.setState({ user, })
          // function to get user from db
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
export default AuthProvider;