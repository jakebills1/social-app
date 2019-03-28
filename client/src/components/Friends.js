import React from 'react';
import { Card, Image, Button, Header, } from 'semantic-ui-react';
import axios from 'axios';

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
        {this.state.friends.map( friend => {
          return (
            <Card key={friend.id}>
              <Image src={friend.avatar} />
              <Card.Content>
                <Card.Header>{friend.name}</Card.Header>
                <Card.Meta>Network: {friend.category}</Card.Meta>
              </Card.Content>
              <Card.Content extra textAlign="center">
                <Button onClick={() => this.addFriend(friend.id)}>
                  Add To Friend Group
                </Button>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
      </>
    )
  }
}
export default Friends;