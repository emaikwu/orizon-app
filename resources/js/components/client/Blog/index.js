import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import DocumentMeta from 'react-document-meta';
import Layout from '../../layout';
import img from '../../../assets/imgs/san-francisco.jpg';
import img2 from '../../../assets/imgs/laravel.png';
import img3 from '../../../assets/imgs/react.png';


class Blog extends Component {
  render() {
    const meta = {
      title : "Blog - Emaikwu Innocent"
    };
    return(
      <DocumentMeta {...meta}>
        <Layout>
          <div className="wrapper">
            <section className="post-list clearfix">
              <article className="post-item cols-3">
                <div className="post-image"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "left",
                    backgroundPositionY: "center",
                    height: "200px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                </div>
                <div className="post-intro">
                  <h3>that is not because I made the right choices or because I did</h3>
                  <p>I repeated this experiment for weeks, spending an unreasonable volume of time leaving notes and listening to the conversations</p>
                  <ul>
                    <li>Emaikwu Innocent</li>
                    <li>20 April 2019</li>
                  </ul>
                 </div>
                <div className="post-link">
                  <Link to="/blog">Read more</Link>
                </div>
              </article>
              <article className="post-item cols-3">
                <div className="post-image"
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "left",
                    backgroundPositionY: "center",
                    height: "200px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                </div>
                <div className="post-intro">
                  <h3>that is not because I made the right choices or</h3>
                  <p>I repeated this experiment for weeks, spending an unreasonable volume of time leaving notes and listening to the conversations that</p>
                  <ul>
                    <li>Emaikwu Innocent</li>
                    <li>20 April 2019</li>
                  </ul>
                 </div>
                <div className="post-link">
                  <Link to="/blog">Read more</Link>
                </div>
              </article>
            </section>
          </div>
        </Layout>
      </DocumentMeta>
    )
  }
}

export default Blog;
