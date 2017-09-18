import React, { Component } from 'react';
import DetailBlock from './detail_block';

class MainSection extends Component {

	renderContentArea() {

		return this.props.content.properties
			.map(item => {
				return (
					<DetailBlock key={item.id} item={item} />
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
					<p>Loading...</p>
				</main>
			)
		}  
		
	}

}

export default MainSection