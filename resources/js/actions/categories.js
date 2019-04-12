import axios from 'axios';

import C from  './constants';
const CATE_URL = '/api/v1/categories';

export const allCategories = () => {
	const req = axios.get(CATE_URL).then(res => res.data);
	
	return ({
		type: C.ALL_CATEGORIES,
		payload: req
	});
}

export const oneCategory = (id) => {
	const req = axios.get(`${CATE_URL}/${id}`).then(res => res.data);

	return({
		type: C.GET_CATEGORY,
		payload: req
	});
}

export const addCategory = (data) => {
	const req = axios.post(CATE_URL, data).then(res => res.data);
	return ({
		type: C.ADD_CATEGORY,
		payload: req
	});
}

export const editCategory = (id, data) => {
	const req = axios.put(`${CATE_URL}/${id}`, data).then(res => res.data);

	return ({
		type: C.EDIT_CATEGORY,
		payload: {
			id,
			data: req
		}
	});
}

export const removeCategory = (id) => {
	const req = axios.delete(`${CATE_URL}/${id}`).then(res => res.data);

	return ({
		type: C.REMOVE_CATEGORY,
		payload: {
			id
		}
	});
}