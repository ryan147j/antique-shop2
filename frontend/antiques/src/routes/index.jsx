import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import AntiquesList from '../components/AntiquesList';
import AntiqueDetail from '../components/AntiqueDetail';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/antiques" exact component={AntiquesList} />
                <Route path="/antiques/:id" component={AntiqueDetail} />
            </Switch>
        </Router>
    );
};

export default Routes;