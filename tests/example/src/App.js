import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const path = window.location.pathname;
    const loc = path.substr(1);

    return (
      <div>
      <h1>Hello, {loc}.</h1>
      </div>
    );
  }
}
