
import React from 'react';

import {connect} from 'react-redux';

import { closeModal } from "../action/modal_actions";

import EmailConfirm from './contact/email_confirm';

import template from '../assets/template.jpg'


function Modal({modal, closeModal}){

  let component;

  if (!modal){
    return null;
   }
 

  switch(modal){
   
    case 'template':
      component = <img src={template} alt="email_template" height='100%'/>;
      break;
    case 'confirm':
    	component = <EmailConfirm/>; // confirms the rep you are sending and shows you a pic of the text 
      break;
    default: 
      return null;
  }


	return (
      <div className="modal" onClick={closeModal}>
        {component}
      </div>
    );
	

}



const mapStateToProps = (state) =>({
  modal: state.modal

});

const mapDispatchToProps = dispatch => ({
  closeModal: ()=> dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);



