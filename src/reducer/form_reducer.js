// form_reducer.js

import {RECEIVE_REP, RECEIVE_DATA} from '../action/form_actions';


let initialState = {

	data: {}, 
	rep: {}
};

const formReducer = (state = initialState, action) => {
	
	Object.freeze(state);
	
	let newState;


	switch(action.type){

		case RECEIVE_REP:

			newState = action.rep;

			return Object.assign({}, state,{rep: newState});

		case RECEIVE_DATA:

			newState = action.data;


			return Object.assign({}, state, {data: newState});

		default: 
			return state;
	}



}

export default formReducer;
