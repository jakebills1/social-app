import React from 'react';
import axios from 'axios';
import { withRouter, } from 'react-router-dom';

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
    return (
      <div>
        profile
      </div>
    )
  }
}
export default withRouter(ViewProfile);