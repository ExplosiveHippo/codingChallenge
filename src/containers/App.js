import React, { Component } from 'react';
import SideNav from '../components/side_nav';
import MainSection from '../components/main_section';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SideNav />
          <MainSection />
      </div>
    );
  }
}

export default App;
