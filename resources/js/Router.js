import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/client/Home';
import Blog from './components/client/Blog';
import SingleBlog from './components/client/Blog/SingleBlog';
import Contact from './components/client/Contact';
import About from './components/client/About';

import Admin from './components/admin/';
import Posts from './components/admin/Posts';
import AddPost from './components/admin/Posts/AddPost';
import EditPost from './components/admin/Posts/EditPost';
import SiteData from './components/admin/SiteData';
import Users from './components/admin/Users';
import AddUser from './components/admin/Users/AddUser';
import EditUser from './components/admin/Users/EditUser';
import Categories from './components/admin/Categories';
import AddCategory from './components/admin/Categories/AddCategory';
import EditCategory from './components/admin/Categories/EditCategory';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/blog/read/:post_id" component={SingleBlog}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>

        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/admin/posts" component={Posts}/>
        <Route exact path="/admin/posts/add" component={AddPost}/>
        <Route exact path="/admin/posts/edit/:id" component={EditPost}/>
        <Route exact path="/admin/users" component={Users}/>
        <Route exact path="/admin/users/add" component={AddUser}/>
        <Route exact path="/admin/users/edit/:id" component={EditUser}/>
        <Route exact path="/admin/categories" component={Categories}/>
        <Route exact path="/admin/categories/add" component={AddCategory}/>
        <Route exact path="/admin/categories/edit/:id" component={EditCategory}/>
        <Route exact path="/admin/site-data" component={SiteData}/>
      </Switch>
    );
  }
}

export default Router;
