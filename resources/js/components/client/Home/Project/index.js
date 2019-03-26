import React, {Component} from 'react';
import img from '../../../../imgs/showcase.png';
import customer from '../../../../imgs/customer-2.jpg';
import quote from '../../../../imgs/quote.png';

class Project extends Component {
	render() {
		return (
			<section className="project clearfix">
				<div className="project-title">
					<h2>Latest Project</h2>
				</div>
				<article className="client cols-2">
					<div className="client-data">
						<img src={customer} alt="" className="img-resp"/>
						<h3>Mx Jane Doe <span>Manager</span></h3>
					</div>
					<div className="client-remarks">
						<img src={quote} alt="quote mark" className="quote"/>
						<p>The person is saying the people has to rise up against the government.</p>
					</div>
				</article>
				<article className="project-item cols-2">
					<div className="project-image">
						<img src={img} alt="" className="img-resp"/>
					</div>
					<div className="project-text">
						<a href="https://mafetengifts.com" target="_blank"><h3>The project title</h3></a>
						<p>Until today when you have better private schools than public schools, parent will not compromise the future of their children for their country.</p>
					</div>
				</article>
			</section>
		)
	}
}

export default Project;