import React from 'react';
import Student from './Student/Student';
import Lecturer from './Lecturer/Lecturer';
import Home from './Home';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/Fraction/Student">
                        <Student />
                    </Route>
                    <Route path="/Fraction/Lecturer">
                        <Lecturer />
                    </Route>
                    <Route path="/Fraction/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;