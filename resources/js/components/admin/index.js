import React from 'react';
import {connect} from 'react-redux';
import AdminLayout from '../layout/AdminLayout';
import ContentWrapper from './ContentWrapper';
import DocumentMeta from 'react-document-meta';

const Dashboard = () => {
	const meta = {title: "Dashboard - Emaikwu Innocent"}
	return (
		<DocumentMeta {...meta}>
			<AdminLayout>
				<ContentWrapper title="Dashboard" items={[
					{name:"Posts", linkTo:"/admin/posts"},
					{name:"Users", linkTo:"/admin/users"}
					]}>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
							<div className="card-heading">
								<h1>Posts</h1>
							</div>
							</div>
						</div>
					</div>

					<div className="col-sm-6">
						<div className="card">
							<div className="card-body">
							<div className="card-heading">
								<h1>Users</h1>
							</div>
							</div>
						</div>
					</div>
				</ContentWrapper>
			</AdminLayout>
		</DocumentMeta>
	)
}

export default connect()(Dashboard);