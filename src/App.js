import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/Teams/team_det';

const App = ()  => (
  <>
    <Header/>

    <Switch>

      <Route path="/teams/:id" component={TeamDetails}/>
      <Route path="/teams" component={Teams}/>
      <Route path="/" component={Home}/>
    </Switch>

    <Footer/>
    </>
)

export default App;
