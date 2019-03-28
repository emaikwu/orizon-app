import React, {Component} from 'react';
import {CircularProgress} from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		this.setState({loading:false});
	}

	render() {
		return (
			<div>
				{this.state.loading ?
					<div className="loading">
						<div className="loading-inner">
							<CircularProgress style={{color:"#007bff"}} thickness={6} open={this.state.loading}/>
						</div>
					</div>
					:
					<div>
						<Header/>
							{this.props.children}
						<Footer/>
					</div>
				}
			</div>
		);
	}
}

export default Layout;