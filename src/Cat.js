import React from 'react'

export default class Cat extends React.Component
{

    testfun()
    {
        alert("test fun")

    }
    render()
    {
        return(
            <div>

                <h1>Cat</h1>

                <button onClick={()=>{this.testfun()}} > Click me </button>
            </div>
        );
    }

}