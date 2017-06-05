import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>My Layout</h3>
        <Header/>
          {this.props.children}
      </div>
    );
  }
}
