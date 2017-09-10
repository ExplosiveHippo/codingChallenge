import React, { Component } from 'react';

class MainSection extends Component{

	renderAppKeys(app_keys){
		return app_keys.map(item =>{
			return(
				<li key={item}>{item}</li>
			)
		});
	}

	//TO DO: Make property block a reusable component
	renderContentArea() {
		let itemsShown = this.props.content.properties;
		return itemsShown.map(item => {
			return (
				<div key={item.id} id={'id' + item.id} className="detailItem">
					<h4>{item.name}</h4>
					<p>Type: {item.data_type}</p>
					<p>Usage</p>
					<ul>
						{this.renderAppKeys(item.app_keys)}
					</ul>
					<p>EverTrueFieldName: {item.name}</p>
				</div>
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