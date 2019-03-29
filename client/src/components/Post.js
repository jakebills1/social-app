import React from 'react';
import { Segment, Icon, Button, } from 'semantic-ui-react';
import axios from 'axios';

class Post extends React.Component {
  state = { likes: "", }
  componentDidMount() {
    axios.get(`/api/friends/${this.props.friend_id}/posts/${this.props.id}`)
      .then( res => {
        this.setState({ likes: res.data.likes})
      })
  }

  addLike = (id) => {
    axios.put(`/api/friends/${this.props.friend_id}/posts/${id}`, {})
      .then( res => this.setState({likes: res.data.likes}))
  }


  render() {
    const { body, likes, addLike, id} =  this.props
    return (
      <li>
      <Segment>
        <p>{body}</p>
        <div style={{ display: "flex", }}>
          <Button onClick={() => this.addLike(id)}>
            <Icon name="thumbs up" color="blue" />
          </Button>
          <Button>
            <Icon name="thumbs down" color="red" />
          </Button>
          <p>{this.state.likes}</p>
        </div>
      </Segment>
    </li>
    )
  }
} 



export default Post;

