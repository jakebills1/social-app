import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider'
import { Form, } from 'semantic-ui-react'

class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "", }

  handlechange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, } = this.state;
    const { auth: { handleRegister, }, history, } =  this.props;
    if (password === passwordConfirmation)
      handleRegister({email, password, passwordConfirmation,}, history)
    else  
      alert("Passwords do not match")
  }
  render() {
    const { email, password, passwordConfirmation, } =  this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="Email: "
        required
        autoFocus
        name="email"
        value={email}
        placeholder="Email"
        onChange={this.handlechange}
        />
        <Form.Input
        label="Password: "
        required
        name="password"
        value={password}
        placeholder="Password"
        type="password"
        onChange={this.handlechange}
        />
        <Form.Input
        label="Confirm Password: "
        required
        name="passwordConfirmation"
        value={passwordConfirmation}
        placeholder="Password"
        type="password"
        onChange={this.handlechange}
        />
        <Form.Button>Register</Form.Button>
      </Form>
    )
  }
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register {...props} auth={auth} />}
  </AuthConsumer>
)

export default ConnectedRegister;