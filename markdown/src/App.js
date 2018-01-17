import React, { Component } from 'react';
import Welcome from './Welcome';
import PageHeader from './PageHeader';

class App extends Component {
  render() {
    return (
      <div>
          <PageHeader />
          <Welcome />
      </div>
    );
  }
}

export default App;
