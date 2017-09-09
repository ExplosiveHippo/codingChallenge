import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMenu } from '../actions/index';

class SideNav extends Component {

	constructor(props) {
		super(props);
		this.props.fetchMenu();
	}

	renderGeneral() {
		let generalItems = this.props.menu.filter(menuNode => {
			return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		return generalItems.map(item => {
			return <button key={item.id}>{item.name}</button>;
		})
	}

	renderSections() {
		console.log(this.props.menu);
		let sections = this.props.menu.filter(menuNode => {
			return menuNode.containing_object;
		});

		 return sections.map(menuNode => {
			return(
				<div key={menuNode.id}>
					<button id={menuNode.id}>{menuNode.name}</button>
					<div className="subNav">
						{this.renderSubNav(menuNode.containing_object.properties)}
					</div>
				</div>
			);
		});
	}


	renderSubNav(menuNode) {
		return menuNode.map(subNode => {
			return <button key={subNode.id}>{subNode.name}</button>;
		});
	}

	render() {
		if(this.props.menu.length > 0){
			return (
				<div className="sidemenu">
					<button>General</button>
					<div className="subNav">
						{this.renderGeneral()}
					</div>
					{this.renderSections()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
