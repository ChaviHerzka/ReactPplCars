import produce from 'immer';
import React from 'react';
import axios from 'axios';


class AddPersonPage extends React.Component{
    state= {
        person: {
            firstName: "",
            lastName: "",
            age: ""}

            }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }
    onAddClick = async () => {
        console.log("hello")
        await axios.post("/api/PeopleCars/addperson", this.state.person);
        this.props.history.push('/');
    }
    render(){
          const {firstName, lastName, age} = this.state.person;
          return(
          <div className='jumbotron'>
              <h2>Add a new person</h2>
              <input type="text" className='form-control' placeholder='First Name' onChange={this.onTextChange} name="firstName" value={firstName} />
              <br/>
              <input type="text" className='form-control' placeholder='Last Name' onChange={this.onTextChange} name="lastName" value={lastName} />
              <br/>
              <input type="text" className='form-control' placeholder='age' onChange={this.onTextChange} name="age" value={age} />
              <br/>
                <button className='btn btn-info btn-block' onClick={this.onAddClick}>Add</button>
          </div>
          )
    }
}
export default AddPersonPage;