import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMenu } from '../actions/index';
import Data from '../schema.json';

class SideNav extends Component {

	constructor(props) {
		super(props);
		console.log(this.state);
	}

	renderGeneral() {
		let generalItems = Data.filter(menuNode => {
			return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		return generalItems.map(item => {
			return <button key={item.id}>{item.name}</button>;
		})
	}

	renderSections() {

		let sections = Data.filter(menuNode => {
			//console.log(menuNode.containing_object);
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
		return (
			<div className="sidemenu">
				<button>General</button>
				<div className="subNav">
					{this.renderGeneral()}
				</div>
				{this.renderSections()}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchMenu}, dispatch);
}

export default connect(null, mapDispatchToProps)(SideNav);
