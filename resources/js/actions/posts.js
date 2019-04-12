import C from './constants';
import axios from 'axios';
const POST_URL = '/api/v1/posts';

export const allPosts = () => {
	const req = axios.get(POST_URL).then(res => res.data);

  return ({
    type: C.ALL_POSTS,
    payload: req
  })
}

export const onePost = (id) => {
	const req = axios.get(`${POST_URL}/${id}`).then(res => res.data);

	return ({
		type: C.GET_POST,
		payload: req
	})
}

export const addPost = (data) => {
	const req = axios.post(POST_URL, data).then(res => res.data);
	return ({
		type: C.ADD_POST,
		payload: req
	})
}

export const editPost = (id, data) => {
	const req = axios.put(`${POST_URL}/${id}`, data).then(res => res.data);

	return ({
		type: C.EDIT_POST,
		payload: {
			id,
			data: req
		}
	})
}

export  const deletePost = (id) => {
	const req = axios.delete(`${POST_URL}/${id}`).then(res => res.data);

	return ({
		type: C.REMOVE_POST,
		payload: req
	})
}