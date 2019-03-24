import React from 'react';
import profile from '../../../../imgs/profile.jpg';
import ContactBtn from './ContactBtn';

const Hero = () => {
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
    		
    		<ContactBtn/>
    		
    	</div>
    </div>
  );
}

export default Hero;
