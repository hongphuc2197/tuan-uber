import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import RegisterPage from './containers/registerPage';
import HomePage from './containers/homePage';
class App extends Component{
  render(){
    return(
      <div>
         <Layout>
            <Switch>
            <Route path = "/" exact component = {HomePage} />
            <Route path="/register" component = {RegisterPage}/> 
            </Switch>
        
         </Layout> 
      </div>
    )
  }
} 
 

export default App;
