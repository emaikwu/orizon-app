import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

import Layout from '../../layout';
import EmailForm from '../../utils/EmailForm';
import SocialMediaIcons from '../../utils/SocialMediaIcons';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const meta = {
      title: "Contact - Emaikwu Innocent"
    };
    return (
      <DocumentMeta {...meta}>
        <Layout>
          <div className="wrapper">
            <div className="contact">
              <div className="phone">
                <h2>Phone</h2>
                <p>+2348132338110</p>
                <p>+2348186355121</p>
              </div>
              <div className="social-media">
                <h2>Social Media</h2>
                <SocialMediaIcons/>
              </div>
              <div className="email-contact">
                <h2>Send me an email</h2>
                <EmailForm/>
              </div>
            </div>
          </div>
        </Layout>
      </DocumentMeta>
    );
  }
}

export default Contact;
