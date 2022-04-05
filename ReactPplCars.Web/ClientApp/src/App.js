import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddPersonPage from './AddPersonPage'
import AddCar from './AddCar'
import DeleteCars from './DeleteCars'
import Layout  from './Layout';

 
const App = () => {
    return (
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/AddPersonPage' component={AddPersonPage}/>
        <Route exact path='/AddCar/:id' component={AddCar}/>
        <Route exact path='/DeleteCars/:id' component={DeleteCars}/>
      </Layout>
    );
  }

export default App;
