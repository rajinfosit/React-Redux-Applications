import React,{Component} from 'react';
import OnHandClickCompo from './Component/OnHandClickCompo'
import OnInputChangeCompo from './Component/OnInputChangeCompo'
import ItemsCompo from './Component/ItemsCompo'
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      val:'',
      items:[],
    };
  }


  onInputChangeMethod=e=>{
    let val1=e.target.value
    this.setState({
      val:val1
    })
  }

  onHandleClickMethod=()=>{
    let item=this.state.val,
    list2=this.state.items;
    list2.push(item);

    this.setState({
      items:list2
    })
  }

render(){
  let items=this.state.items;
  return(
    <div>
      <OnInputChangeCompo
      onInputChange={this.onInputChangeMethod}>
      </OnInputChangeCompo>

      <OnHandClickCompo 
      onHandleClick={this.onHandleClickMethod}>
      </OnHandClickCompo>

      <ItemsCompo items={items}>

      </ItemsCompo>
      

    </div>

  )
}
}

export default App;
