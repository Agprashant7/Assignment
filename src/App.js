import React from 'react';
import './App.css';
import studentdata from './data.json'
import {Route,BrowserRouter} from 'react-router-dom';
import Table from './table';
import Admission from './admission'


class App extends React.Component{
 
    
  




  render(){
    
  
    return(
      <BrowserRouter>
      <div>
  <Route exact path='/' component={Table}/>
  <Route path='/Admission' component={Admission}/>
   
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
