import React, {Component} from 'react';
import ItemComponent from '../components/item';
import {fetchItem} from '../actions/search';
export default class ListDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {movieList:[] }
	}
    
    componentDidMount() {
		this.props.store.dispatch(fetchItem());
        this.props.store.subscribe( ()=> {
			this.setState({
				movieList: this.props.store.getState()
			});
		});
		document.addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.trackScrolling);
	}
	
	isBottom(el) {
		return el.getBoundingClientRect().bottom <= window.innerHeight;
	}

	trackScrolling = () => {
		const wrappedElement = document.getElementById('searchDiv');
		if (this.isBottom(wrappedElement)) {
			console.log('header bottom reached');
			document.removeEventListener('scroll', this.trackScrolling);
		}
	};

	render() {
		var list  = this.props.store.getState().list, rows =[],
		search = this.props.store.getState().search, content;
		if(search.searchedname){
			content = search.page['content-items'].content;
		} else {
			content = list.page['content-items'].content;
		}
		
		var inc = 0;
		for(let i=0; i< content.length;i=i+3) {
			rows.push(<div class="flex mb-4">
				<ItemComponent content={content[i]}  key={i}  />			
				{content[(i+1)] && <ItemComponent content={content[(i+1)]}  key={(i+1)}  />} 
				{content[(i+2)] && <ItemComponent content={content[(i+2)]}  key={(i+2)}  />} 
			</div>	)
		}
		
		return (
			<React.Fragment>
				{rows}
			</React.Fragment>
		) 
	}
} 