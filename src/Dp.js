import React from 'react'
export default function Dp(pro){

    const red=()=>
    {
        alert("red function Called")
    }
    return <div>
        <h1 onClick={red} >Dp Component</h1>
    </div>


}