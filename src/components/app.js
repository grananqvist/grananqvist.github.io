import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Navbar from './nav/navbar.js';
import HomePage from './home/home-page.js';
import CelebGanPage from './celeb-gan/celeb-gan-page.js';

import 'jquery';
import 'jquery.transit';

class App extends Component {
    render() {
        const bg = this.props.location.pathname == '/' ? 'black' : 'white';
        return (
            <div style={{height: '100vh', backgroundColor: bg}}>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/secret' component={CelebGanPage}/>
                    </Switch>
            </div>
        );
    }
}

export default withRouter(App)
