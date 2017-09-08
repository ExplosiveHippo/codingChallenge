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
					<h2 id={menuNode.id}>{menuNode.name}</h2>
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
				<h2>General</h2>
				{this.renderGeneral()}
				{this.renderSections()}
			</div>
		)
	}
}

export default SideNav;
