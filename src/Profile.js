import React from 'react'

class Profile extends React.Component{
    constructor()
    {

        super()

    }
   componentDidMount(){
    console.warn(" Called life Cycle ")
   }

    render(){

        return(

            <div>
                <h1>Profile Component</h1>
            </div>
        )

    }
}

export default Profile;