import axios from 'axios';

import C from './constants';
const USER_URL = '/api/v1/users';

export const allUsers = () => {
	const req = axios.get(USER_URL).then(res => res.data);

	return ({
		type: C.ALL_USERS,
		payload: req
	})
}

export const oneUser = (id) => {
	const req = axios.get(`${USER_URL}/${id}`).then(res => res.data);

	return ({
		type: C.GET_USER,
		payload: req
	})
}

export const addUser = (data) => {
	const req = axios.post(USER_URL, data).then(res => res.data);

	return ({
		type: C.ADD_USER,
		payload: req
	})
}

export const editUser = (id, data) => {
	const req = axios.put(`${USER_URL}/${id}`, data).then(res => res.data);

	return ({
		type: C.EDIT_USER,
		payload:{
			id,
			data: req
		}
	})
}

export const deleteUser = (id) => {
	const req = axios.delete(`${USER_URL}/${id}`).then(res => res.data);

	return ({
		type: C.REMOVE_USER,
		payload: {id}
	})
}