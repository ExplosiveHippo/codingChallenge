import React, { Component } from 'react';

class DetailBlock extends Component {

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
			<article>
				<caption>{item.name}</caption>
				<table key={item.id} id={'id' + item.id} className="detailItem">
					<thead>
						<tr>
							<td>Type:</td>
							<td>Usage:</td>
							<td>EverTrueFieldName:</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{item.data_type}</td>
							<td>{this.renderAppKeys(item.app_keys)}</td>
							<td>{item.name}</td>
						</tr>

					</tbody>
				</table>
			</article>
		);
	}

}

export default DetailBlock;