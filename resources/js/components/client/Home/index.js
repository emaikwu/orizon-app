import React, {Component} from 'react';
import DocumentMeta from "react-document-meta";
import axios from 'axios';
import {connect} from 'react-redux';

import Hero from './Hero';
import Highlights from './Highlights';
import Layout from '../../layout';
import Posts from './Posts';
import Project from './Project';
import Slide from './Slide';

class Home extends Component {
	constructor(props) {
		super(props);
	}



	render() {	
	  const meta = {title:"Home - Emaikwu Innocent"};
	  return (
	    <DocumentMeta {...meta}>
	      <Layout>
		      <Hero/>
		      <div className="wrapper">
			      <Highlights/>
			      <Project/>
			      <Posts/>
		      </div>
	     	</Layout>
	    </DocumentMeta>
	  )
	}
}

export default connect()(Home);
