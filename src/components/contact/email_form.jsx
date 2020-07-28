
import React from 'react';


class EmailForm extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			address: '',
			house:''
		}
	}

	handleChange(field){

		return e =>this.setState({
			[field]: e.currentTarget.value
		})
	}


	async handleChangeSubmit(e){
		e.preventDefault()
		let data = this.state;
		console.log(this.state.address, this.state.house);

		//need to add async await
		this.props.receiveData(data);



		//async 
		// this.props.fetchRepData(this.state.address, this.state.house)
		// .then(() => this.props.openModal('confirm'));
		await this.props.fetchRepData(this.state.address, this.state.house);
		await this.props.openModal('confirm');


		


	}

	render(){

		const formStyle = {
			display:'flex', 
			flexDirection: 'column',
			padding: '1%',
			alignItems: 'center',
			marginRight: '5%',
			marginLeft: '5%',
			label: {
				margin: '5px'
			},
			button:{
				fontSize:'25px',
				borderRadius: '8px',
				width:'20%',

			}
			
		}


		return(
			<div>

			<form style={formStyle} onSubmit={e=> this.handleChangeSubmit(e)}>

				<label style={formStyle.label}> Address:
				<input type="text"
				value={this.state.address}
				id="name"
				onChange={this.handleChange('address')}
				required
				/>
				</label>

				<label style={formStyle.label}> Do you want to contact your representative or your senator?

				<select name="congress" value={this.state.house} required id="con" onChange={this.handleChange('house')}>
				  <option >select one</option>

				  <option value="legislatorUpperBody">Sentator</option>
				  <option value="legislatorLowerBody">Representative</option>
				  
				</select >
				</label>
				
				<button style={formStyle.button} type="submit">Look up</button>
			</form>
			</div>
			)
	}



};


export default EmailForm;
