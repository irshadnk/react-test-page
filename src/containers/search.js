import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import backArrow from '../Slices/Back.png';
import searchimg from '../Slices/search.png';
import {searchItem, clearSearch} from '../actions/search';

export default class searchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.showSearchbox = this.showSearchbox.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onBack = this.onBack.bind(this);

	}
	showSearchbox() {
		const elem  = <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" 
		type="text" placeholder="Search here" aria-label="Search here" onChange={this.handleChange}></input>
		ReactDOM.render(elem, document.getElementById('searchDiv'));
	}
	handleChange(event) {
		var searchkey = event.target.value;
		this.props.store.dispatch(searchItem(searchkey));
	}

	onBack() {
		this.props.store.dispatch(clearSearch());
		ReactDOM.render("", document.getElementById('searchDiv'));
	}
	
	render() {
		return (
		<div class="flex my-4">
			<div class="w-1/2">
				<div class="flex">
					<div class="w-1/4" onClick = {this.onBack}>
						<img  src={backArrow} alt="back" style={{width:'20px'}} />
					</div>
					<div class="w-3/4">
						<p>Romantic Comedy</p>
					</div>
				</div>
			</div>
			<div class="w-1/2">
				<div class="flex">
					<div class="w-3/4" id ="searchDiv">
					</div>
					<div class="w-1/4" onClick={this.showSearchbox}>
						<img  src={searchimg} alt="back" style={{width:'20px'}} />
					</div>
				</div>
			</div>
		</div>
		) 
	}
} 