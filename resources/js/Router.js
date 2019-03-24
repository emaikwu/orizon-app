import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/client/Home';
import Blog from './components/client/Blog';
import Contact from './components/client/Contact';
import About from './components/client/About';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
      </Switch>
    );
  }
}

export default Router;
