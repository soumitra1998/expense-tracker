import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashborad';
import Add from './Add';

const Routes = () => {
    return (
        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/add" exact component={Add}/>
                <Route path="/dashboard" exact component={Dashboard}/>
             
            </Switch>
        </BrowserRouter>    
        
    )
}

export default Routes
