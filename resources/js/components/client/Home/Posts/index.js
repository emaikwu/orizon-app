import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Post from './Post';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		axios.get("/api/v1/posts").then(res => {
			this.setState({posts: res.data})
		});
	}

	render() {
		return (
			<section className="home-posts clearfix">
				<div className="home-post-title">
					<h2>Latest Posts</h2>
					<hr/>
				</div>
				{this.state.posts.map((post,i) => {
						return <Post key={i} {...post}/>
					}
				)}
			</section>
		);
	}
}

export default connect()(Posts);