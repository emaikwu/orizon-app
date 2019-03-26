import React, {Component} from 'react';
import Highlight from './Highlight';
import instructor from '../../../../imgs/instructor1.png';
import backend from '../../../../imgs/backend.png';
import frontend from '../../../../imgs/frontend.png';

class Hightlights extends Component {
	constructor(props) {
		super(props);
		this.state = {
			highlights : [
				{
					id: 1,
					title: "Frontend Developer",
					text: "Intuitive and elegant UI with HTML5, CSS3, ES6 for your visitors to explore.",
					image: frontend
				},
				{
					id: 2,
					title: "Backend Developer",
					text: "Make a decision concerning the security and Inteligence of your web applictions.",
					image: backend
				},
				{
					id: 3,
					title: "Code Instructor",
					text: "Practical course materials to take you from a complete newbie to advanced web developer in no time.",
					image: instructor
				}
			]
		}
	}

	render() {
		return (
			<div className="highlights clearfix">
				{this.state.highlights.map((highlight, i) => (
					<Highlight key={highlight.id} {...highlight}/>
				))}
			</div>
		)
	}
}

export default Hightlights;