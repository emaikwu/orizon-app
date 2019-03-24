import React, {Component} from 'react';
import {AppBar, Toolbar, IconButton, Button} from '@material-ui/core';

import {NavLink} from 'react-router-dom';
import {MdMenu} from 'react-icons/md';
import logo from '../../imgs/ei-w.png';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: "fixed"
    }
    this.toggleNavPosition = this.toggleNavPosition.bind(this);
  }

  toggleNavPosition() {
    window.onscroll = () => {
      if(window.scrollY > 81) {
        this.setState({
          position: "fixed"
        });
      } else {
        this.setState({
          position: "static"
        });
      }
    }
  }

  componentDidMount() {
    // this.toggleNavPosition();
  }

  render() {
    return (
      <div>
        <AppBar
          position={this.state.position}
          style={{
            backgroundColor:"#2b55b6"
          }}
        >
          <Toolbar>
            <div className="logo">
              <img src={logo} alt="Emaikwu Innocent's logo"/>
            </div>
            <ul className="navigation">
              <li><NavLink to="/" activeClassName="is-active" exact>Home</NavLink></li>
              <li><NavLink to="/blog" activeClassName="is-active">Blog</NavLink></li>
              <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
              <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
            </ul>
            <IconButton
              aria-label="menu"
              style={{color: "#fff"}}
            >
              <MdMenu/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header;
