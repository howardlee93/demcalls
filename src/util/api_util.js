// api_util.js

import axios from 'axios';

import {YOUR_API_KEY} from '../config/api_key';


const base = 'https://www.googleapis.com/civicinfo/v2/representatives';


export const fetchRep = ( address, house) => {
	return axios.get (base,{
		params: {
			address: `${address}`,
			levels: 'country',
			roles: `${house}`,
			key: `${YOUR_API_KEY}`
		}
	})// see if you can clean up data here
	// .then(res => {
	// 	let officials = res.data.officials;
	// 	return officials;
	// }) // res.data.officials
	.catch(err => console.log(err))
}


