import React from 'react'

export default class User extends React.Component{

    componentWillMount()
    {
        alert("User has been Deleted")
    }
    render(){
      
        return (
          <div >
              <ul>

                  <li>Name: Muneeb</li>
                  <li>Email: Muneebahmad123@gmail.com</li>
                  <li>Phone: 032345455456</li>
              </ul>
    
            
          </div>
        );

    }
    
}