
'use strict';

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import TrackerUtilities from './TrackerUtilities';
import TrackerNavBar from './TrackerNavBar';
import FaceCheck from './FaceCheck';

//ReactDOM.render(<TrackerUtilities/>, document.getElementById('TrackerUtilities'));

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={TrackerNavBar}>
                    <IndexRoute component={TrackerUtilities}/>
                    <Route path='/trackerutilities' component={TrackerUtilities}/>
                    <Route path='/facecheck' component={FaceCheck}/>
                </Route>
            </Router>
        );
    }
}
