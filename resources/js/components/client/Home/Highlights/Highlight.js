import React from 'react';
import laravel from '../../../../imgs/laravel.png';

const Highlight = (props) => {
	return (
		<div className="highlight-item cols-3">
			<div className="highlight-image">
				<img src={laravel} alt="" className="img-resp"/>
			</div>
			<div className="highlight-text">
				<h3>{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default Highlight