import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMenu } from '../actions/index';
import SideNav from '../components/side_nav';
import MainSection from '../components/main_section';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.fetchMenu();
  }

  render() {
    if(this.props.menu.length > 0){
      return (
       <div className="App">
          <SideNav menu={this.props.menu} />
          <MainSection />
          </div>
        ) 
    }else return <div>Loading...</div>
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMenu}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
