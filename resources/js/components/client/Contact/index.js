import React from 'react';
import DocumentMeta from 'react-document-meta';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const Contact = () => {
  const meta = {
    title: "Contact - Emaikwu Innocent"
  };
  return (
    <DocumentMeta {...meta}>
      <Header/>
      <div className="wrapper">
      	Contact
      </div>
      <Footer/>
    </DocumentMeta>
  )
}

export default Contact;
