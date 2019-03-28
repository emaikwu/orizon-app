import React from 'react';
import DocumentMeta from 'react-document-meta';

import Layout from '../../layout';

const About = () => {
  const meta = {
    title: "About - Emaikwu Innocent"
  };
  return (
    <DocumentMeta {...meta}>
      <Layout/>
        <div className="wrapper">

        </div>
      <Layout/>
    </DocumentMeta>
  )
}

export default About;
