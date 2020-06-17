// form_actions.js

import * as APITUtil from '../util/api_util'

export const RECEIVE_REP = 'RECEIVE_REP';
export const RECEIVE_DATA = 'RECEIVE_DATA';




export const receiveData = data =>({
	type: RECEIVE_DATA,
	data
});

const receiveRep = rep => ({
	type: RECEIVE_REP,
	rep,
});



export const fetchRepData = (address, house )=> dispatch => (
	APITUtil.fetchRep(address, house)
	.then(rep => dispatch(receiveRep(rep)))// rep.data.officials
	.catch(err => console.log(err))
	)




