import React, { Component } from 'react';

class MainSection extends Component{

	renderAppKeys(app_keys){
		return app_keys.map(item =>{
			return(
				<li>{item}</li>
			)
		});
	}

	renderContentArea() {
		let itemsShown = this.props.content;
		return itemsShown.map(item => {
			return (
				<div key={item.id} id={'id' + item.id} className="detailItem">
					<h2>{item.name}</h2>
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
		if(this.props.content.length > 0){
			return(
				<main className="mainSection">
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