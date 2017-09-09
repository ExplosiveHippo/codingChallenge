import React, { Component } from 'react';

class SideNav extends Component {

	sectionSelect(el,sectionId) {
		document.querySelectorAll('.sectionParent')
			.forEach(el => el.classList.remove('active'));

		document.getElementById(el.id)
			.classList.add('active');

		console.log('group selected: ', sectionId);
	}

	childSelect() {
		console.log('child selected');
	}

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

						<button className='sectionParent' id={menuNode.id} onClick={(event) => 
							this.sectionSelect(event.target,menuNode.id)}>{menuNode.name}</button>

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
				return <button key={subNode.id} onClick={this.childSelect}>{subNode.name}</button>;
		});
	}

	render() {
		if(this.props.menu.length > 0){
			return (
				<div className='sideMenu'>

					<button>General</button>

					<div className='subNav'>
						{this.renderGeneral()}
					</div>

					{this.renderSections()}

				</div>
			)
		}else return <div>Loading...</div>
		
	}
}



export default SideNav;
