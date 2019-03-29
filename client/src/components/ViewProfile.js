import React from 'react';
import axios from 'axios';
import { withRouter, } from 'react-router-dom';
import { Image, Header, } from 'semantic-ui-react'

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
          <Header as-="h1">{profile.name}</Header>
          <Image src={profile.avatar} />
        </div>
        <div> 
          <ul>
            {posts.map(
              post => <li>{post.body}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(ViewProfile);