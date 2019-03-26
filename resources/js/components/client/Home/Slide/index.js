import React from 'react';
import laravel from '../../../../imgs/laravel.png';
import nodejs from '../../../../imgs/nodejs.png';
import react from '../../../../imgs/react.png';
import html5 from '../../../../imgs/html5.png';

const Slide = () => {
	return (
		<div className="cycle-slideshow">
			<img src={laravel} alt=""/>
			<img src={nodejs} alt=""/>
			<img src={react} alt=""/>
			<img src={html5} alt=""/>
		</div>
	)
}

export default Slide;