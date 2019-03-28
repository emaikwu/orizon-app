import React from 'react';

import {Link} from 'react-router-dom';

const ContentWrappr = (props) => {
	return (
  <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2 admin_title">
          <div className="col-sm-12 mx-auto">
          	<div className='row'>
          		<div className="col-sm-6"><h1>{props.title}</h1></div>
          		<div className="col-sm-6">
          			<ol className="breadcrumb float-sm-right">
          				{props.items && props.items.map((item, i) => 
	          					<li key={i} className="breadcrumb-item">
	          						<Link to={item.linkTo}>{item.name}</Link>
	          					</li>)}
          				{props.active && (
          						<li className="breadcrumb-item active">
          							{props.active}
          						</li>
          					)}
          			</ol>
          		</div>
          	</div>
          </div>
        </div>
      </div>
    </div>

    <section id="content" className="content" style={{background: "#fff", minHeight: "85vh"}}>
      <div className="container-fluid">
        <div className="row">
        	
        		{props.children}
        	
        </div>
      </div>
    </section>
  </div>
	)
}

export default ContentWrappr;