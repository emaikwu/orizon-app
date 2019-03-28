import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

import img from '../../../../assets/imgs/react.png';

const Post = (props) => {
	return (
    <Grid className="home-post-item" item xs={12} sm={6} md={3}>
      <Paper className={props.classes.paper}>
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
      		<Link to={'/blog/read'+props.id}>Read more...</Link>
      	</div>
      </Paper>
    </Grid>
	)
}

export default Post;

