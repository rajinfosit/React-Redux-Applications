import React,{Component} from 'react';

const OnHandClickCompo=(props)=>{
    return(
        <div>
            <button onChange={props.onHandleClick}></button>

        </div>
    )
}

export default OnHandClickCompo;