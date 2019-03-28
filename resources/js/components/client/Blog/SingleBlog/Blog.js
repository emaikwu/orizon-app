import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  EmailShareButton,

  FacebookShareCount,
  LinkedinShareCount,
  PinterestShareCount,

  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';
import {MdShare} from 'react-icons/md';

import DocumentMeta from 'react-document-meta';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import img from '../../../imgs/san-francisco.jpg';

class Blog extends Component {
  render() {
    const meta = {
      title : "Blog - Emaikwu Innocent"
    };
    return(
      <DocumentMeta {...meta}>
        <Header/>
        <div className="wrapper">
          <section className="post">
            <article className="post-item">
              <div className="post-title">
                <h1>#MOR10ISANOLD – THE 40TH BIRTHDAY FUNDRAISER AND ALL THE THINGS YOU NEED TO KNOW</h1>
              </div>
              <figure className="featured-image">
                <img src={img} alt="laravel"/>
              </figure>
              <div className="cate-links">
                <span>Category: <Link to="/category/news">News</Link></span>
              </div>
              <div className="post-content">
                <p>Somehow I made it to 40. On October 17, I break that imaginary temporal threshold that puts me squarely in what Norwegians refer to as the “middle age”. In the eyes of my younger self I guess that makes me, officially, “an old”. The path leading here has been long and complex, with twists and turns and loops and seemingly unmountable obstacles. Yet I am here, in my office, writing this. And for that I am grateful.</p>
                <p>Some 20 years ago, while riding the subway from downtown Oslo to Blindern station on my way to a philosophy lecture at the University of Oslo, I ripped a page out of my notebook and scribbled down a question</p>
                <p>I folded the slip of paper, wrote “read me” on the front, and placed it on an empty seat across the aisle. At the next station a group of students entered and one of them picked up the paper and read it. Then he read it out loud and they all started laughing. What a ridiculous question. Yet minutes later they were deep in conversation about what they had accomplished in life, and more importantly what they wanted to accomplish.</p>
                <h1> I also hope to convince you to donate if you have the means.</h1>
                <h2> I also hope to convince you to donate if you have the means.</h2>
                <h3> I also hope to convince you to donate if you have the means.</h3>
                <h4> I also hope to convince you to donate if you have the means.</h4>
                <h5> I also hope to convince you to donate if you have the means.</h5>
                <p>I repeated this experiment for weeks, spending an unreasonable volume of time leaving notes and listening to the conversations that followed on the subway. Looking back on it now, it is clear what I was really doing was attempting to crowdsource an answer to the hardest problem: the meaning of life.</p>
                <p>As I round this arbitrary milestone of my life, I am no closer to answering that question I left on a subway seat on the other side of the world all those years ago. Maybe the meaning of life will only reveal itself two years from now? As my search continues, I am putting forward an interim answer, and for that I need your help.</p>
                <p>Looking at the world today, and back at the world I grew up in, I see an endless succession of refugee crisis, observed from afar and from which my life and the lives of those around me have rarely been impacted. And I’ve come to realize that there, but for the grace of privilege and luck and geography and geopolitical machinations over which I had no impact or involvement, go I. My life so far has been one of opportunity and open doors, one in which the fear of bombs and bullets and terror has been in the abstract. And that is not because I made the right choices or because I did the right things or because I worked hard or believed in the right powers. It is because I happened to be born to a middle class family in Norway. During peacetime. That’s all.</p>
                <h3>volume of time leaving notes and listening to</h3>
                <p>That’s where you come in. I also hope to convince you to donate if you have the means. If you have a dollar or two, follow the link and add your contribution. If you don’t, just help spread the word using the #Mor10isanOld hashtag and maybe someone else in your circle will. And if you don’t want to donate to this organization, or even this cause, find something else you care about to contribute to. Or take the time today to tell someone in your life how important they are to you. Do your small part to leave the world a better place than you found it, in whatever way you see fit.</p>
                <pre id="print" className="prettyprint lang=js">
                  
                    console.log("Hello world");
                    const answer = () => {

                    }
                </pre>
                <ul>
                  <li>Hausa</li>
                  <li>Igbo</li>
                  <li>Yoruba</li>
                  <li>Birom</li>
                </ul>
              </div>
              <div className="share-btns">
                <span className="share-icon">
                  <MdShare/>
                </span>
                <FacebookShareButton url="www.emaikwuinnocent.com/blog/read/1" quote="My new post" hashtag="#TestingReactShare">
                  <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url="www.emaikwuinnocent.com/blog/read/1">
                  <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
                <WhatsappShareButton url="www.emaikwuinnocent.com/blog/read/1" title="Testing">
                  <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
              </div>
              <footer className="post-footer">
                <span className="tags-links">Tags: <Link to="/tags/general">General</Link></span>
              </footer>
            </article>
          </section>
        </div>
        <Footer/>
      </DocumentMeta>
    )
  }
}

export default Blog;
