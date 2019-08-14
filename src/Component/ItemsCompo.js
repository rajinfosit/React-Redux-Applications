import React,{Component} from 'react';


const ItemsCompo=(props)=>{

    return (

        <div>
        <ol>
          {  props.items.map(el=><li>{el}</li>)}

        </ol>

        </div>
    )
}

export default ItemsCompo;