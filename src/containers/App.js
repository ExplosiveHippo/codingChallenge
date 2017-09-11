import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMenu } from '../actions/index';
import { fetchContent } from '../actions/index';
import SideNav from '../containers/side_nav';
import MainSection from '../components/main_section';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.fetchMenu();
    // Throughout the app, when null is being passed
    // into fetchContent, it means load the default Content, which is general info
    this.props.fetchContent(null);
  }

  render() {
      return (
       <section className="App">
          <SideNav menu={this.props.menu} />
          <MainSection content={this.props.activeSection} />
        </section>
      ) 
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    activeSection: state.activeSection
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMenu, fetchContent}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
