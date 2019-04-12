import React, {Component} from 'react';
import {CircularProgress} from '@material-ui/core';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import {allSettings} from '../../actions/settings';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			data: []
		}
	}

	componentDidMount() {
		this.props.dispatch(allSettings()).then(res => {
			if(res) {
				this.setState({data:res, loading:false})
			}
		})
	}

	render() {
		return (
			<div>
				{this.state.loading ?
					<div className="loading">
						<div className="loading-inner">
							<CircularProgress style={{color:"#007bff"}} thickness={8} open={this.state.loading}/>
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

export default connect()(Layout);