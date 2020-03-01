import React from 'react';
import'./App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Address from './components/Address/AddressForm';
import Categories from './components/Categories/CategoriesForm';
import Success from './components/Success/SuccessForm';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
function App(props) {
  return (
      <div className={'app-wrapper-content'}>
        <Navbar exact path='localhost:3000' component={Navbar} />
        <Route path='/RegistrationForm' render={() => <RegistrationForm dispatch={props.dispatch} post={props.state.post}/>}/>
        <Route path='/Address' render={() => <Address dispatch={props.dispatch} post={props.state.post}/>}/>
        <Route path='/Categories' render={() => <Categories dispatch={props.dispatch} post={props.state.post}/>}/>
        <Route path='/Success' render={() => <Success />}/>
      </div>
  );
}

export default App;
