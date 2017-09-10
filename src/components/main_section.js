import React, { Component } from 'react';
import DetailBlock from './detail_block';

class MainSection extends Component {

	//TO DO: Make property block a reusable component
	renderContentArea() {
		let itemsShown = this.props.content.properties;
		return itemsShown.map(item => {
			return (
				<DetailBlock item={item} />
			)
			
		});
	}
	
	render() {
		if(this.props.content.properties){
			return(
				<main className="mainSection">
					<h2>{this.props.content.name}</h2>
					{this.renderContentArea()}
				</main>
			);
		}else{
			return(
				<main className="mainSection">
					<p>Select an section in the left menu to view all properties for that section</p>
				</main>
			)
		}  
		
	}

}

export default MainSection