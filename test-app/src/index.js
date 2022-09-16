import React, { Component } from 'react'; // import react
import ReactDOM from 'react-dom'; // import reacts library to put things in the dom
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppHeader from './AppHeader';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class App extends Component {

    constructor(props) {
	super(props);
	this.handlePostChange = this.handlePostChange.bind(this);
	this.state = {posts: []};
    }

    handlePostChange(posts) {
	this.setState({posts: posts});
    }
    
    render() {
	const myProps = {
	    title: "my cool app",
	    subject: "my subject",
	    favourite_color: "red",
	}
	return (
	    <div className="app">
		<AppHeader {...myProps}
			   posts={this.state.posts}
			   handlePostChange={this.handlePostChange} />
		<AppContent
		    posts={this.state.posts}
		    handlePostChange={this.handlePostChange} />
		{/* <AppFooter /> */}
		<AppFooter />
	    </div>
	);
    }
}

ReactDOM.render(<App />, document.getElementById('root')); // tell the dom to render our component
