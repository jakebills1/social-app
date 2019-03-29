import React from 'react';
import axios from 'axios';
import Post from './Post';
import { withRouter, } from 'react-router-dom';
import { Image, Header, Card, } from 'semantic-ui-react'

class ViewProfile extends React.Component {
  state = { profile: {}, posts: [] }

  componentDidMount() {
    axios.get(`/api/friends/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ profile: res.data})
      })
    axios.get(`/api/friends/${this.props.match.params.id}/posts`)
      .then( res => {
        this.setState({posts: res.data, })
      })
  }
 
  render() {
    const { profile, posts } =  this.state
    return (
      <div style={{display: "flex"}}>
        <div>
          <Card>
            <Card.Content>
              <Header as-="h1">{profile.name}</Header>
              <Image src={profile.avatar} />
            </Card.Content>
            <Card.Content extra>
              <p>{profile.status}</p>
            </Card.Content>
          </Card>
        </div>
        <div> 
          <ul style={{listStyle: "none"}}>
            {posts.map(
              post => <Post key={post.id} {...post} addLike={this.addLike} friend_id={this.props.match.params.id}/>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(ViewProfile);

