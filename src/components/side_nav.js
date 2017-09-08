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

	renderGeneral() {
		let generalItems = Data.filter(menuNode => {
			console.log(menuNode.containing_object);
			return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		return generalItems.map(item => {
			return <p>{item.name}</p>;
		})
	}

	renderSection() {

		let sections = Data.filter(menuNode => {
			//console.log(menuNode.containing_object);
			return menuNode.containing_object;
		});

		let generalItems = Data.filter(menuNode => {
			console.log(menuNode.containing_object);
			return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		console.log("sections: ", sections);

		console.log("general: ", generalItems);

		 return Data.map(menuNode => {
			if(menuNode.containing_object){
				let name = menuNode.containing_object.name;

				return(
					<h2>{name}</h2>
				);
			}else{
				return <p>{menuNode.name}</p>
			}
		});
	}

	render() {
		return (
			<div className="sidemenu">
				<h2>General</h2>
				{this.renderGeneral()}

			</div>
		)
	}
}

export default SideNav;
