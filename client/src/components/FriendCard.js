import React from 'react';
import axios from 'axios';
import { Card, Button, Image, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom';
class FriendCard extends React.Component {
  state = { posts: [], }

  componentDidMount() {
    axios.get(`/api/friends/${this.props.id}/posts`)
      .then( res => this.setState({ posts: res.data,}))
    // this.setState({ latestPost: this.state.posts[0]})
  }

  latestPost = (posts) => {
    return posts.sample(1).body
  }

  render() {
    const { avatar, name, category, status, id} = this.props;
    return (
      <Card>
        <Image src={avatar} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>Network: {category}</Card.Meta>
        </Card.Content>
        <Card.Content extra >
          <Card.Header as="h4">Last Update: </Card.Header>
          <Card.Description>{status}</Card.Description>
        </Card.Content>
        <Card.Content textAlign="center">
          <Link to={`/friends/${id}`}>
            <Button>View Profile</Button>
          </Link>
        </Card.Content>
      </Card>
    )
  }
}
export default FriendCard;

