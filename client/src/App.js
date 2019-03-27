import React from 'react';
// my components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
// components
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';


const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Container>
  </>
)

export default App;
