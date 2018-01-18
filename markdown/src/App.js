import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Welcome from './Welcome';
import PageHeader from './PageHeader';
import HomePage from './HomePage';


class App extends Component {
  render() {
    return (
      <div>
          <PageHeader />
          <Welcome />
          <HomePage />
      </div>
    );
  }
}

export default App;
