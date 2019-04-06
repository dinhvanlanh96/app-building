
  import React, { Component } from 'react';
  import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
  import RouterURL from './../../Routers/RouterURL';
  import Header from './../Includes/Header';
  import Sidebar from './../Includes/Sidebar';
  class App extends Component {
    render() {
      return (
        <Router>
        <Header/>
        <div className="main-container ace-save-state">
          <Sidebar/>
          <div className="main-content">
            <div className="main-content-inner">
            { this.showContentMenus(RouterURL)}
            </div>
          </div>
        </div>
        </Router>
      );
}
showContentMenus = (routes)=>{ 
    var result = null;
    if(routes.length>0)
    {
        result =routes.map((route,index)=>{
           return(
           <Route
                key={index}
                path={route.path}
                exact ={route.exact}
                component={route.main}
            />);
        });
    }
    return<Switch>{result}</Switch>
  }
}

export default App;
