import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import '../../../assets/admin-cms/dist/css/adminlte.min.css';
import '../../../assets/css/bootstrap.css';
import user from '../../../assets/imgs/profile.jpg';
import logo from '../../../assets/imgs/logo2.png';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-light" data-widget="pushmenu"><i className='fa fa-bars'></i></button>
            </li>
            <li className="nav-item d-none ml-5 d-sm-inline-block">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item d-none ml-5 d-sm-inline-block">
              <Link to="/admin/login" className="nav-link">Login</Link>
            </li>
          </ul>

          <form className="form-inline ml-5">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </nav>

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" className="brand-link">
            <img src={logo} alt="Emaikwu logo" className="brand-image img-circle elevation-3"
                 style={{opacity: "1", borderRadius: "0"}}/>
            <span className="brand-text font-weight-light">Emaikwu</span>
          </Link>

          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src={user} className="img-circle elevation-2" alt="User"/>
              </div>
              <div className="info">
                <Link to="/admin" className="d-block">Alexander Pierce</Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item has-treeview menu-open">
                  <Link to="/admin" className="nav-link active">
                    <i className="fa fa-dashboard nav-icon"></i>
                    <p>
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="/admin/posts" className="nav-link">
                     <i className="fa fa-edit nav-icon"></i>
                    <p>
                      Posts  
                      <i className="right fa fa-angle-right"></i>
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="/admin/users" className="nav-link">
                    <i className="fa fa-users nav-icon" aria-hidden="true"></i>
                    <p>
                      Users
                      <i className="fa fa-angle-right right"></i>
                    </p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="/admin/categories" className="nav-link">
                    <i className="nav-icon fa fa-book"></i>
                    <p>
                      Categories
                      <i className="fa fa-angle-right right"></i>
                    </p>
                  </Link>
                </li>
                 <li className="nav-item has-treeview">
                  <Link to="/admin/settings" className="nav-link">
                    <i className="nav-icon fa fa-book"></i>
                    <p>
                      App settings
                      <i className="fa fa-angle-right right"></i>
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    )
  }
}

export default Header;
