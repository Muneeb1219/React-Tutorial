import React from 'react';

import './App.css'; 

class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      name:"",
      password:"",
      nameError:"",
      passwordError:""

    }
  }

  valid()
  {
    if(!this.state.name.includes("@")  && this.state.password.length<5)
    {
      this.setState({nameError:"Invalid Name" , passwordError:"password lenght should be more than 5"})
    }

    else if(!this.state.name.includes("@") )
    {
      this.setState({nameError:"Invalid Name" })
    }
    else if( this.state.password.length<5)
    {
      this.setState({ passwordError:"password lenght should be more than 5"})
    }

  
   

    }
  

  submit()
  {
    if(this.valid())
    {
      alert("Form has been Submit")

    }

   
  }

  render()
  {
    return(
      <div className="App" >
  

        <h1 style={{color:"Silver"}}>Form Validation</h1>
        <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} />
        <p style={{color:"red" , fontSize: "11px"}}>{this.state.nameError}</p>

        <input type="text" onChange={(event)=>{this.setState({password:event.target.value})}} />
        <p style={{color:"red" , fontSize: "11px"}}>{this.state.passwordError}</p>

        <button style= {{color:"Red"}}onClick={()=>{this.submit()}}> Submit </button>
  
       
  
  
        
  
       </div>
         
         
    );

  }

}

export default App;



 
