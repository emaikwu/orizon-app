import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

import AdminLayout from '../../layout/AdminLayout';
import ContentWrapper from '../ContentWrapper';

class SiteData extends Component {
	render() {
		const meta = {title: "Application data - Emaikwu Innocent"};
		return (
			<DocumentMeta {...meta}>
				<AdminLayout>
					<ContentWrapper title="Site Data">
					</ContentWrapper>
				</AdminLayout>
			</DocumentMeta>
		);
	}
}

export default SiteData;