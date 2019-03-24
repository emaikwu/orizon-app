import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../../../imgs/react.png';

const Post = (props) => {
	return (
		<article className="home-post-item cols-4">
			<div className="home-post-image">
				<img src={img} alt={props.title} className="img-resp"/>
			</div>
			<div className="home-post-text">
				<div className="home-post-heading">
					<h3>{props.title}</h3>
				</div>
				<p>{props.content}</p>
			</div>
			<div className="home-post-link">
				<Link to={"/blog/read/" + props.id}>Read post</Link>
			</div>
		</article>
	)
}

export default Post;