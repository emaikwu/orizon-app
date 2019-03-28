import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {FaPlusCircle} from 'react-icons/fa';


class FileUpload extends Component {
	constructor(props) {
		super(props);
		this.onDrop = this.onDrop.bind(this);
	}
	onDrop(files) {
		console.log(files[0].preview);
	}

	render () {
		return (
			<div>
				<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
				  {({getRootProps, getInputProps}) => (
				    <section>
				      <div {...getRootProps()}>
				        <input {...getInputProps()} />
				        <p>Drag 'n' drop some files here, or click to select files</p>
				      </div>
				    </section>
				  )}
				</Dropzone>
			</div>
		)
	}
}


export default FileUpload;