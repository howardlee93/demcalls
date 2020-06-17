
import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

import {openModal} from '../../action/modal_actions';



const EmailConfirm = (props) => {

	const [rep, setRep] = useState([]);
	const [address, setAddress] = useState("");





	useEffect(()=>{

		setRep(props.rep.data.officials);
		setAddress(props.data.address);



	},[props])

	const button ={
		fontSize:'10px',
		borderRadius: '8px',
		width:'10%',

	};



	const officialsStyle = {
		display:'flex',
		flexDirection: 'column', 
		height:'70%', 
		width:'auto',
		alignItems: 'center',
		paddingBottom: '5%',
		displayList:{
			display:'flex',
			flexDirection: 'row',  
			// float:'left',
			alignItems: 'center',
			marginRight: '1px',
			marginLeft: '1px'

		}
	}

	const handleClick = () =>{
		alert("thanks!");
		

	}

	const officialsDisplay = rep.map((official, i) => ( 
		<div key={i}> 
			<img src={official.photoUrl} alt="pic" height="100" width="75"/>
			<p> {official.name}</p>
			<p>{official.phones}</p>

			{official.address.map((address, idx)=> (
				<div key={idx}>
				<p>{address.locationName}</p>

				<p>{address.line1}</p>
				<p>{address.line2}</p>
				<p>{address.line3}</p>
				<p>{address.city}</p>

	          	<p>{address.state}</p> 
	          	<p>{address.zip}</p>

				</div> 
			))}


			<p><a href={official.urls} style={{color:'white'}}>Website</a></p>
			<p>{official.party}</p>

		</div>
		));




	return(
		<div style={officialsStyle}>
			<h2>Your federal representatives:</h2>
				<div style={officialsStyle.displayList}>
				{officialsDisplay}
				</div>
			<h2> Is this your address?</h2>
			<p> Address: {address}</p>
			<button style={button} onClick={handleClick}>Everything looks good!</button> 
		</div>
		)

}


const mapStateToProps = state => ({
	rep: state.form.rep,
	data: state.form.data

});




const mapDispatchToProps = dispatch => ({

	openModal: modal => dispatch(openModal('sent'))

})


export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirm);
