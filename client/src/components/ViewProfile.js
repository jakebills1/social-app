import React from 'react';
import axios from 'axios';
import { withRouter, } from 'react-router-dom';

class ViewProfile extends React.Component {
  state = { profile: {}, }

  componentDidMount() {
    axios.get(`/api/friends/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ profile: res.data})
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