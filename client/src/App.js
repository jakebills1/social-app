import React from 'react';
// my components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute';
import Friends from './components/Friends'
import ViewProfile from './components/ViewProfile'
// components
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/friends" component={Friends} />
          <ProtectedRoute exact path="/friends/:id" component={ViewProfile} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
