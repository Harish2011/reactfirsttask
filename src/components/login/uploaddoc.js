import axios from 'axios'; 

import React,{Component} from 'react'; 
 import './uploaddoc.css';

class Uploaddoc extends Component { 

	constructor()
	{
		super()
		this.state={
			showme:false
		}
	}
	state = { 

	// Initially, no file is selected 
    selectedFile: null,
    empid: '',
	empname: null,
	err:'fkuhfhjfjh'

}; 
change = (event) => {

    let nam = event.target.name;
    let val = event.target.value;
	this.setState({[nam]: val});
	
  }
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
	// Update the state 
	this.setState({ selectedFile: event.target.files[0] }); 
	
	}; 
	
	// On file upload (click the upload button) 
	onFileUpload = () => { 
	
	// Create an object of formData 
	const formData = new FormData(); 
	
	// Update the formData object 
	formData.append( 
		"myFile", 
		this.state.selectedFile, 
		this.state.selectedFile.name 
	); 
	
	// Details of the uploaded file 
	console.log(this.state.selectedFile); 
	
	// Request made to the backend api 
	// Send formData object 
	axios.post("api/uploadfile", formData); 
	}; 
	
	// File content to be displayed after 
    // file upload is complete 
   
	fileData = () => { 
	
	if (this.state.selectedFile && this.state.empid &&  this.state.empname ) { 
		
		return ( 
		<div> 
			<h2>File Details:</h2> 
            <p>Employee ID :  {this.state.empid} </p>
            <p>Employe Name :  {this.state.empname}</p>
			<p>File Name: {this.state.selectedFile.name}</p> 
			<p>File Type: {this.state.selectedFile.type}</p> 
			<p> 
			Last Modified:{" "} 
			{this.state.selectedFile.lastModifiedDate.toDateString()} 
			</p> 
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
			<h4>Data not found!</h4> 

		</div> 
		); 
	} 
	}; 
	fileData1 = () => { 
		
		if (this.state.selectedFile && this.state.empid &&  this.state.empname) { 
			
			return ( 
			<div> 
				{alert("Successfull uploaded")}
			</div> 
			); 
		} else { 
			return ( 
			<div> 
				<br /> 
				{alert(this.err)}
			
				
			</div> 
			); 
		} 
		}; 
	operation()
	{
		this.setState({
			showme:!this.state.showme
		})
		
	}
	upload()
	{

		this.err="Please file the data  before Pressing the Upload"
		{this.fileData1()} 
	}
	
	render() { 
	
	return ( 
        <div>
            
		<div className="uploaddoc"> 
			<h1> 
			UPLOAD DOCUMENT 
			</h1> 
			<div> 
                
            <input type="text" name="empid" placeholder="Employee ID" onChange={this.change} /><br/>
            <input type="text" name="empname" placeholder="Employee Name" onChange={this.change} />
			

				<input type="file" onChange={this.onFileChange}/> 
                

				<button className="btn1" onClick={()=>this.upload()}> 
				Upload! 
				</button> 
				
                
			</div> 
		
		</div> 

        <div className="view">
        <button className="btn2" onClick={()=>this.operation()}> 
				View Document 
				</button> 
			{
			this.state.showme?
			<div>
			
			{this.fileData()} 
			</div>
			:null
			}
        </div>
		{

		}
        </div>
	); 
	} 
} 

export default Uploaddoc; 
