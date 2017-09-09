import React, { Component } from 'react';

class MainSection extends Component{

	renderAppKeys(app_keys){
		return app_keys.map(item =>{
			console.log(item);
			return(
				<li>{item}</li>
			)
		});
	}

	renderContentArea() {
		let itemsShown = this.props.content;
		return itemsShown.map(item => {
			console.log(item);
			return (
				<div key={item.id} className="detailItem">
					<h2>{item.name}</h2>
					<p>Type: {item.data_type}</p>
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
				<div className="mainSection">
					{this.renderContentArea()}
				</div>
			);
		}else{
			return(
				<div className="mainSection">
					<p>Select an section in the left menu to view all properties for that section</p>
				</div>
			)
		}  
		
	}

}

export default MainSection