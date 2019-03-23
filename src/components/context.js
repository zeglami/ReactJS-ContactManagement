import React, { Component } from 'react'
import axios from 'axios'


const Context=React.createContext();

const reducer=(state,action)=>{
switch(action.type){
  case 'DELETE_CONTACT':
  return{
    contacts: state.contacts.filter((conatct)=>conatct.id!==action.payload)
  };


  case 'ADD_CONTACT':
  return{
    contacts: [action.payload,...state.contacts]
  };

  default:
          return state; 
}
}

export class Provider extends Component {
  state = {
    contacts: [ 
     // {id: 1, name: "Hassan", phone: "0650303315", email: "hassan@gmail.com"}
    ],
    dispatch: action => this.setState(state => reducer(state, action))

  }

  async componentWillMount(){
   const res= await axios.get('https://jsonplaceholder.typicode.com/users')
   this.setState(
    {
      contacts:res.data
    }
  )
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>

      </div>
    )
  }}
  export const Consumer = Context.Consumer;