import React, {Component} from 'react';
import Highlight from './Highlight';
// import 

class Hightlights extends Component {
	constructor(props) {
		super(props);
		this.state = {
			highlights : [
				{
					id: 1,
					title: "Frontend Developer",
					text: "Intuitive and elegant UI with HTML5, CSS3, ES6 for your visitors to explore.",
					image: ""
				},
				{
					id: 2,
					title: "Backend Developer",
					text: "Make a decision concerning the security and Inteligence of your web applictions."
				},
				{
					id: 3,
					title: "Code Instructor",
					text: "Practical course materials to take you from a complete newbie to advanced web developer in no time."
				}
			]
		}
	}

	render() {
		return (
			<div className="highlights clearfix">
				{this.state.highlights.map((highlight, i) => (
					<Highlight key={highlight.id} text={highlight.text} title={highlight.title}/>
				))}
			</div>
		)
	}
}

export default Hightlights;