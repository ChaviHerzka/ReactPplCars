import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonRow from './PersonRow';


class HomePage extends React.Component {
    state = {
        people: [],
        search: ''
    }
    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const { data } = await axios.get('/api/peopleCars/getall');
        this.setState({ people: data });
    }
    onSearchChange = async (e) => {
    this.setState({search: e.target.value});
    const {data} = await axios.get('/api/peoplecars/getAll');
    const {search} = this.state;
    const ppl = data.filter(p => p.firstName.toLowerCase().includes(search) || p.lastName.toLowerCase().includes(search));
    this.setState({people: ppl});
    }
    onCancelClick = () =>{
        this.refreshPeople();
        this.setState({search: ''})
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" className="form-control form-control-lg" onChange={this.onSearchChange} value={this.state.search} placeholder="Search People"  />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-info btn-lg btn-block" onClick={this.onCancelClick}>Clear</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link to={'/addPersonPage'}>
                            <button className="btn btn-success btn-block">Add Person</button>
                        </Link>
                    </div>
                </div>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars!</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.people.map(p=> <PersonRow key = {p.id} person= {p}/>)}                       
                    </tbody>
                </table>
            </>
        )
    }
}
export default HomePage;

