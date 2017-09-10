import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContent } from '../actions/index';

class SideNav extends Component {

	sectionSelect(el,sectionId) {
		if(el.classList.contains('active')) el.classList.remove('active');
		else{
			document.querySelectorAll('.sectionParent')
			.forEach(item => {
				item.classList.remove('active');
				if(el.id === item.id) item.classList.add('active');
			});
		}

		this.props.fetchContent(sectionId)
	}

	childSelect(hash) {
		window.location.hash = "#id" + hash;
	}

	//TO DO: Refactor General to work similar to our other sections

	renderGeneral() {
		let generalItems = this.props.menu
			.filter(menuNode => {
				return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		return generalItems
			.map(item => {
			return <button key={item.id}>{item.name}</button>;
		})
	}

	renderSections() {
		let sections = this.props.menu
			.filter(menuNode => {
				return menuNode.containing_object;
		});

		 return sections
		 	.map(menuNode => {
				return(
					<div key={menuNode.id}>

						<button className='sectionParent' id={'id' + menuNode.id} onClick={(event) => 
							this.sectionSelect(event.target,menuNode.id)}>{menuNode.containing_object.name}</button>

						<div className='subNav'>
							{this.renderSubNav(menuNode.containing_object.properties)}
						</div>

					</div>
				);
		});
	}


	renderSubNav(menuNode) {
		return menuNode
			.map(subNode => {
				return <button key={subNode.id} onClick={() => this.childSelect(subNode.id)}>{subNode.name}</button>;
		});
	}

	render() {
		if(this.props.menu.length > 0){
			return (
				<aside className='sideMenu'>
					<h3>Field Groups</h3>

					<button className='sectionParent'>General</button>

					<div className='subNav'>
						{this.renderGeneral()}
					</div>

					{this.renderSections()}

				</aside>
			)
		}else return <div>Loading...</div>
		
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchContent}, dispatch);
}

export default connect(null, mapDispatchToProps)(SideNav);
