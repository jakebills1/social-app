import React from 'react';
import axios from 'axios';
import { Header, Card, Image, Button, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { friends: [], }
  componentDidMount() {
    axios.get("/api/friends")
      .then( res => {
        this.setState({ friends: res.data})
      })
  }
  addFriend = (id) => {
    const { friends, } = this.state;
    axios.put(`/api/friends/${id}`)
      .then( () => this.setState({friends: friends.filter( f => f.id !== id)}))
  }
  render() {
    // const friendsList = this.state.friends.sample(10);
    return (
      <>
        <Header as="h1" textAlign="center">Discover New Friends</Header>
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
export default Home; 