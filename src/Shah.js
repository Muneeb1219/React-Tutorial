import React from 'react'

export default class Shah extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:'peter',
            email:  'Ahmadmuneeb185.com',
            count:0
        }
    }

    UpdateState()
    {
        this.setState({
            name:'Bruce',
            email:'uman342@.com',
            count:this.state.count+1

        })
    }
    render()
    {
        return(
            <div>
                <h1>Count {this.state.count}</h1>
                <h1>Email :{this.state.email}</h1>

                <button onClick={()=>{this.UpdateState()}}>  Update Name </button>
            </div>
        )
    }
}