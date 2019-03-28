import React, {Component} from 'react';
import {AppBar, Toolbar, IconButton, Button} from '@material-ui/core';

import {NavLink, Link} from 'react-router-dom';
import {MdMenu} from 'react-icons/md';
import SideDrawer from './Drawer';
import logo from '../../assets/imgs/logo2.png';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: "fixed",
      open: false
    }
    this.toggleNavPosition = this.toggleNavPosition.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
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

  toggleDrawer() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  componentDidMount() {
    // this.toggleNavPosition();
  }

  render() {
    return (
      <AppBar
        id="header"
        position={this.state.position}
        style={{
          backgroundColor:"#2b55b6"
        }}
      >
        <Toolbar>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Emaikwu Innocent's logo"/>
            </Link>
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
            onClick={this.toggleDrawer}
          >
            <MdMenu/>
          </IconButton>
        </Toolbar>
        <SideDrawer open={this.state.open} side="left" onClose={this.toggleDrawer}/>
      </AppBar>

    )
  }
}

export default Header;
