import React, {Component} from 'react';
import profile from '../../../../assets/imgs/profile.jpg';
import ContactBtn from './ContactBtn';
import FeedBack from '../../../utils/FeedBack';

class Hero extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <div id="hero">
        <div className="profile">
          <div className="profile-img">
              <img src={profile} alt="Emaikwu Innocent"/>
          </div>
          <div className="profile-name">
              <h1>Emaikwu Innocent</h1>
          </div>
          <div className="profile-desc">
            <p>Freelance full stack web developer and code instructor. I build smalll to large scaleable modern web applications that will meet the demand for your venture, a passionate code instructor.</p>
            <h2>Build. Learn. Evolve</h2>
          </div>
              
          <ContactBtn onClick={this.toggleDialog}/>     
        </div>
        <FeedBack 
          open={this.state.open} 
          close={this.toggleDialog} 
          title="Send me an email"
        />
      </div>  
    );
  }
 
    

}

export default Hero;
