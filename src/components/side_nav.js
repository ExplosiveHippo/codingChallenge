import React, { Component } from 'react';
import Data from '../schema.json';

class SideNav extends Component {

	constructor(props) {
		super(props);

		//TO DO: load data via redux
		this.state = {
		}
	}

	renderGeneral() {
		let generalItems = Data.filter(menuNode => {
			return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		return generalItems.map(item => {
			return <p key={item.id}>{item.name}</p>;
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
					<h2 id={menuNode.id}>{menuNode.name}</h2>
					{this.renderSubNav(menuNode.containing_object.properties)}
				</div>
			);
		});
	}


	renderSubNav(menuNode) {
		return menuNode.map(subNode => {
			return <p key={subNode.id}>{subNode.name}</p>;
		});
	}

	render() {
		return (
			<div className="sidemenu">
				<h2>General</h2>
				{this.renderGeneral()}
				{this.renderSections()}
			</div>
		)
	}
}

export default SideNav;
