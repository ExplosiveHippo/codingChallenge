import React, { Component } from 'react';
import Data from '../schema.json';

class SideNav extends Component {

	constructor(props) {
		super(props);

		//TO DO: load data via redux
		this.state = {
			menuSections: []
		}
	}

	renderSection() {
		 return Data.map(menuNode => {
			if(menuNode.containing_object){
				let name = menuNode.containing_object.name;
				return(
					<h2>{name}</h2>
				);
			}
		});
	}

	render() {
		return (
			<div className="sidemenu">
				{this.renderSection()}
			</div>
		)
	}
}

export default SideNav;
