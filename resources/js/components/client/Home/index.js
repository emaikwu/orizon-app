import React, {Component} from 'react';
import DocumentMeta from "react-document-meta";
import axios from 'axios';
import {connect} from 'react-redux';

import Hero from './Hero';
import Highlights from './Highlights';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Posts from './Posts';
import Project from './Project';

class Home extends Component {
	componentDidMount() {
		axios.get("/api/v1/posts").then(res => console.log(res.data));
	}
	render() {	
	  const meta = {title:"Home - Emaikwu Innocent"};
	  return (
	    <DocumentMeta {...meta}>
	      <Header/>
	      <Hero/>
	      <div className="wrapper">
		      <Highlights/>
		      <Project/>
		      <Posts/>
	      </div>
	     	<Footer/>
	    </DocumentMeta>
	  )
	}
}

export default connect()(Home);
