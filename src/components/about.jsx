
import React from "react";

import {connect} from 'react-redux';

import template from '../assets/template.jpg'

import { openModal } from "../action/modal_actions";


const About = (props) => {
	
	return(
		
		<div className="learn">

		<img src={template} alt="email_template" width='150px'onClick={()=>props.openModal("template")}/>

		<p ><b>Read a sample letter template</b></p>

		<h1> Here are some more resources to learn about this subject:</h1>
		
		<h2> What is it?</h2>

			<p> Froms <a href="https://en.wikipedia.org/wiki/Qualified_immunity">Wikipedia</a>: "Qualified immunity is a legal doctrine in United States 
			federal law that shields government officials from being sued for discretionary actions 
			performed within their official capacity, unless their actions violated 'clearly established' federal law or constitutional rights."</p>



			<p><a href="https://www.vox.com/2020/6/3/21277104/qualified-immunity-cops-constitution-shaniz-west-supreme-court">Here is an explainer by Vox</a></p>
			<p><a href="https://www.reuters.com/investigates/special-report/usa-police-immunity-scotus/"> Here is a Reuters investigative report on how police use 
			qualified immunity to avoid accountability</a></p>


		<h2> Why this is important</h2>

			<p> Qualified immunity has been abused by officers and departments to absolve them of their duty to protect 
			ALL members of society. While these protests are happening, qualified immunity will shield officers who are
			 harming protestors. Qualified immunity shields many officers who perpetrate violence against unarmed Black people.</p>

			 <p>Bringing an end to it would force departments to take precautions like making sure officers use de-escalation 
			 techniques and are trained to properly assess whether a situation needs any physical force.</p>

		<h2> What can we do?</h2>
		<p>Right now bills have been introduced seeking to end qualified immunity. As qualified immunity is not a 
		legal doctrine rooted in the US Constitution, the United States Congress has the power to alter it however it sees fit.

		What you can do is write to your federal representative demandind the end of to qualified immunity.</p> 
		
		</div>

		)
}



const mapStateToProps = (state) =>({
  modal: state.modal

});

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),

});

export default connect(mapStateToProps, mapDispatchToProps)(About);



