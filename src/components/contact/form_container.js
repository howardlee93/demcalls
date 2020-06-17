// form_container.js

import {connect} from 'react-redux';

import EmailForm from './email_form'


import {openModal, closeModal} from '../../action/modal_actions';

import {fetchRepData, receiveData} from '../../action/form_actions';



const mapStateToProps = state => ({
	address : state.address,
	modal: state.modal

});


const mapDispatchToProps = dispatch => ({

	receiveData: data => dispatch(receiveData(data)),

	fetchRepData: (address, house) => dispatch(fetchRepData(address, house)),// add after api 
	
	openModal : modal => dispatch(openModal(modal)),

	closeModal: ()=> dispatch(closeModal())

});




export default connect (mapStateToProps, mapDispatchToProps)(EmailForm)