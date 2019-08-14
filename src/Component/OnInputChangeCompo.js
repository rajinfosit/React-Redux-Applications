import React,{Component} from 'react';

const OnInputChangeCompo=(props)=>{
    return(
        <div>
            <input type="text" onChange={props.onInputChange}>
            </input>
        </div>
    )
}

export default OnInputChangeCompo;