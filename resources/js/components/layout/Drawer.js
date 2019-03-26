import React from 'react'
import {Drawer, Button, List, ListItem, ListItemText} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const SideDrawer = (props) => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -89
    })
  }

  return (
    <div>
      <Drawer
      anchor={props.side}
      open={props.open}
      onClose={props.onClose}
      >
        <List
          component="nav"
          >
          <ListItem style={{padding:0}}>
          	<NavLink className="side-link" exact={true} activeClassName="side-active" to="/">Home</NavLink>
          </ListItem>
          <ListItem style={{padding:0}}>
          	<NavLink className="side-link" activeClassName="side-active" to="/blog">Blog</NavLink>
          </ListItem>
          <ListItem style={{padding:0}}>
          	<NavLink className="side-link" activeClassName="side-active" to="/contact">Contact</NavLink>
          </ListItem>
          <ListItem style={{padding:0}}>
          	<NavLink className="side-link" activeClassName="side-active" to="/about">About</NavLink>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default SideDrawer
