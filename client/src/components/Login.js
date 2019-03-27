import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Form, Button } from 'semantic-ui-react';

class Login extends React.Component {
  state = { email: "", password: ""}
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history)
    this.props.history.push("/")
  }
  render() {
    const { email, password, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Email: "
            name="email"
            placeholder="Email"
            required
            autoFocus
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password: "
            name="password"
            placeholder="Password"
            required
            value={password}
            type="password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button primary >Login</Button>
      </Form>
    )
  }
}

const ConnectedForm = (props) => (
  <AuthConsumer>
    {value => (
      <Login
      {...props}
      auth={value}
      />
    )}
  </AuthConsumer>
)
export default ConnectedForm;