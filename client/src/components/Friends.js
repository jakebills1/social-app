import React from 'react';
import { Card, Header, } from 'semantic-ui-react';
import axios from 'axios';
import FriendCard from './FriendCard'

class Friends extends React.Component {
  state = { friends: [],}
  componentDidMount() {
    axios.get("/api/friendslist")
      .then( res => this.setState({ friends: res.data, }))
  }
  render() {
    return (
      <>
        <Header as="h1" textAlign="center">Your Friends</Header>
        <Card.Group itemsPerRow={4}>
          {this.state.friends.map( friend => <FriendCard key={friend.id} {...friend}/> )}
        </Card.Group>
      </>
    )
  }
}
export default Friends;