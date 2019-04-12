import React from 'react';
import laravel from '../../../../assets/imgs/laravel.png';
import nodejs from '../../../../assets/imgs/nodejs.png';
import react from '../../../../assets/imgs/react.png';
import html5 from '../../../../assets/imgs/html5.png';

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