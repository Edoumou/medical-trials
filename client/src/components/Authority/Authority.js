import React, { Component } from 'react';
import Header from './Header';

class Authority extends Component {
  render() {
    return (
      <div>
            <Header
                contract = {this.props.contract}
                role = {this.props.role}
                account = {this.props.account}
            />
      </div>
    )
  }
}

export default Authority
