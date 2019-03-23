import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context'

export default class Contacts extends Component {
    state = {
        conatcts : [
            {id:1,name:"zeglami Khalid",phone:"06666666",email:"zeg@mail.com"},
            {id:2,name:"zeglami Reda",phone:"07666666",email:"zeg1@mail.com"},
            {id:3,name:"zeglami Youness",phone:"05666666",email:"zeg2@mail.com"}

        ]
    }



    deleteContact(id){
     // console.log("delete from Contacts")
     const {conatcts}=this.state;
     const newListContacts= conatcts.filter((conatct)=>conatct.id!==id)

     this.setState(
       {
         conatcts:newListContacts
       }
     )


    }

    render(){
      return(
        <Consumer>
          {value => (
            <div>
            {value.contacts.map((contact) => (
               <Contact 
               key={contact.id}
               data={contact}
               deleteContactFromChild={this.deleteContact.bind(this,contact.id)}
               
               /> 
                ))}
          </div>
          )}
        </Consumer>
      )
    }

 
}
