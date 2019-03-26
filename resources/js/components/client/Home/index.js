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
import Slide from './Slide';

class Home extends Component {
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
