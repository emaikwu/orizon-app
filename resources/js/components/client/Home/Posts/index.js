import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import axios from 'axios';

import Post from './Post';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

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
		const classes = this.props.classes;
		return (
			<section className={classes.root} className="home-posts">
				<div className="home-post-title">
					<h2>Latest Posts</h2>
				</div>
      	<Grid container spacing={16}>
      		{this.state.posts.map((post, i) => {
      			return <Post key={i} {...post} classes={classes}/>
      		})}
       	</Grid>
    	</section>	
		);
	}
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);