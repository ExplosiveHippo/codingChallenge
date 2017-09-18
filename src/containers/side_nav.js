import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContent } from '../actions/index';

class SideNav extends Component {

	sectionSelect(el,sectionId) {
		// Loop through sections and expand subnav for 
		// selected section
		document.querySelectorAll('.sectionParent')
		.forEach(item => {
			item.classList.remove('active');
			if(el.id === item.id) item.classList.add('active');
		});

		//Scroll to top
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		this.props.fetchContent(sectionId)
	}

	childSelect(hash) {
		window.location.hash = "#id" + hash;
	}

	renderGeneral() {
		const generalItems = this.props.menu
			.filter(menuNode => {
				return !menuNode.containing_object && menuNode.data_type !== 'object';
		})

		return generalItems
			.map(item => {
				return <button key={item.id} onClick={() => this.childSelect(item.id)}>{item.name}</button>;
		})
	}

	renderSections() {
		const sections = this.props.menu
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
		// the first time through the menu data won't be loaded, 
		// let's show loading if that happens

		// we pass in null for selectSection to indicate the general Info data
		// throughout the application when we see null being passed around it likely means
		// we are referencing our General info data, since it has no parentId
		if(this.props.menu.length > 0){
			return (
				<aside className='sideMenu'>
					<h4>Field Groups</h4>
					<button className='sectionParent active' onClick={(event) => 
						this.sectionSelect(event.target, null)}>General Info</button>

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
