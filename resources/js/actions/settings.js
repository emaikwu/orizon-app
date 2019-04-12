import C from './constants';
import axios from 'axios';

const APP_URL = '/api/v1/settings';

export const allSettings = () => {
	const req = axios.get(APP_URL).then(res => res.data);
	return ({
		type: C.ALL_SETTINGS,
		payload: req
	});
}

export const oneSetting = (id) => {
	const req = axios.get(`${APP_URL}/${id}`).then(res => res.data);
	return ({
		type: C.GET_SETTING,
		payload: req
	});
}

export const addSetting = (data) => {
	const req = axios.post(APP_URL, data).then(res => res.data);
	return({
		type: C.ADD_SETTING,
		payload: req
	})
}

export const editSetting = (id, data) => {
	const req = axios.put(`${APP_URL}/${id}`, data).then(res => res.data);
	return({
		type: C.EDIT_SETTING,
		payload: req
	})
}