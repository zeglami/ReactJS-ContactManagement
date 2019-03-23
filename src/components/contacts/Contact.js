import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Contact extends Component {

  state={
    showContactToggle:true
  }

  showContact(myMesssage){
    console.log("salam",myMesssage);
    this.setState(
      {showContactToggle:!this.state.showContactToggle}
    );
  }

  onDeleteClick=(id, dispatch)=>{
      axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
      .then(res=>
        dispatch(
          {
            type: 'DELETE_CONTACT',
            payload: id
          }
        ))
        .catch(err=>console.error());
          
    
    
  }

 
  


  render() {
const {id,name,phone, email}=this.props.data;


    return(
      <Consumer>
        {
         
          value=>{
            const { dispatch } =value;
            return(
                  
            <div className="card">
            <div className="card-body">
              <h4 className="card-title">
              {name}
              <i style={{cursor:'pointer'}}  onClick={this.showContact.bind(this,name)} className="fa fa-sort-down">
              </i>

              <Link to={+id}></Link>

              <i style={{color:'red', float:'right',cursor:'pointer'}} className="fa fa-times" aria-hidden="true"
              onClick={this.onDeleteClick.bind(this,id,dispatch)}
              >
              </i>
              
              </h4>
             
    {(this.state.showContactToggle) ? (
      <ul className="list-group">
      <li className="list-group-item">{phone}</li>
      <li className="list-group-item">{email}</li>
    </ul>) : null}
    
    
             
            </div>
          </div>
            )            

          }
        }

      </Consumer>
    )

    
  }
}

Contact.defaultProps={
  name:"My name",
  phone:"05555555555",
  email:"test@mail.com"
}
Contact.propTypes={
  data: PropTypes.object.isRequired
}
