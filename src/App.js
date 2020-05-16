import React from 'react';
import Student from './Student/Student';
import Lecturer from './Lecturer/Lecturer';
import Home from './Home';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/Fraction/Student" component={Student} />
                    <Route path="/Fraction/Lecturer" component={Lecturer} />
                    <Route path="/Fraction" component={Home} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
