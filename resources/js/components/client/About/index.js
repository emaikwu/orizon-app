import React from 'react';
import DocumentMeta from 'react-document-meta';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const About = () => {
  const meta = {
    title: "About - Emaikwu Innocent"
  };
  return (
    <DocumentMeta {...meta}>
      <Header/>
      <div className="wrapper">

      </div>
      <Footer/>
    </DocumentMeta>
  )
}

export default About;
