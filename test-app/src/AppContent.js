import React, { Component } from 'react';

export default class AppContent extends Component {

    constructor(props) {
	super(props);
	this.handlePostChange = this.handlePostChange.bind(this);
    } 

    handlePostChange(posts) {
	this.props.handlePostChange(posts);
    }

    
    fetchList = () => {
	fetch("https://jsonplaceholder.typicode.com/posts")
	    .then((response) => response.json())
	    .then(json => {
		this.props.handlePostChange(json);
	    })
    }

    clickedItem = (x) => {
	console.log('clicked', x);
    }
    
    render() {
	return (
	    <div>

		<p>Posts is {this.props.posts.length} items long</p>
		<br />

		<button onClick={this.fetchList} className="btn btn-primary">Fetch</button>

		<hr />

		<ul>
		    {this.props.posts.map((c) => (
			<li key={c.id}>
			    <a href="#!" onClick={() => this.clickedItem(c.id)}>
				{c.title}
			    </a>
			</li>
		    ))}
		</ul>

	    </div>
	)
    }
}
