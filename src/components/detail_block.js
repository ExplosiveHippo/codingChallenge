import React, { Component } from 'react';

export default class DetailBlock extends Component {

	renderAppKeys(app_keys){
		return app_keys.map(item =>{
			return(
				<li key={item}>{item}</li>
			)
		});
	}

	render(){
		const item = this.props.item;
		return(
			<div key={item.id} id={'id' + item.id} className="detailItem">
				<h4>{item.name}</h4>
				<p>Type: {item.data_type}</p>
				<p>Usage</p>
				<ul>
					{this.renderAppKeys(item.app_keys)}
				</ul>
				<p>EverTrueFieldName: {item.name}</p>
			</div>
		);
	}

}