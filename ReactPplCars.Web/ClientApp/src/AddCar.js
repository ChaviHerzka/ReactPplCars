import produce from 'immer';
import React from 'react';
import axios from 'axios';


class AddCar extends React.Component{
    state ={
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
            },

        person: {
            firstName: '',
            lastName: '',
           
        }
    }
    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const {data} = await axios.get(`/api/peoplecars/getById?id=${id}`);
        this.setState({person: data, car:{personId: id}});
    }
       
        onAddClick = async () => {
            console.log(this.state.car);
            console.log(this.state.person);
            await axios.post("/api/PeopleCars/addcar", this.state.car);
            this.props.history.push('/');
        }

        onTextChange = e => {
            const nextState = produce(this.state, draftState =>{
                draftState.car[e.target.name]= e.target.value;
            });
            console.log(nextState)
            this.setState(nextState);
        }
        render(){
            const{firstName, lastName} = this.state.person;
            const{make, model, year} = this.state.car;
            return(
               <div className='jumbotron'>
                   <h2>Add a new car for {firstName} {lastName}</h2>
                   <input type="text" className='form-control' placeholder='Make' value={make} name="make" onChange={this.onTextChange} />
                   <br/>
                   <input type="text" className='form-control' placeholder='Model' value={model} name="model" onChange={this.onTextChange} />
                   <br/>
                   <input type="text" className='form-control' placeholder='Year' value={year} name="year" onChange={this.onTextChange} />
                   <br/>
                     <button className='btn btn-info btn-block' onClick={this.onAddClick}>Add</button>
               </div>
                
               
            )
        }
        
    }


export default AddCar;
