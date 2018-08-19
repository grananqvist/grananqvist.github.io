import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './nav/navbar.js';
import HomePage from './home/home-page.js';
import CelebGanPage from './celeb-gan/celeb-gan-page.js';

import 'jquery';

export default class App extends Component {
    render() {
        return (
            <div style={{height: '100vh', backgroundColor: 'black'}}>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/celebgan' component={CelebGanPage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
