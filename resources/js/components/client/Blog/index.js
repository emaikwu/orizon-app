import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

class Blog extends Component {
  render() {
    const meta = {
      title : "Blog - Emaikwu Innocent"
    };
    return(
      <DocumentMeta {...meta}>
        <Header/>
        <div className="wrapper">
        </div>
        <Footer/>
      </DocumentMeta>
    )
  }
}

export default Blog;
