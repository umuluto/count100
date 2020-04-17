import React from 'react';
import Student from './Student/Student';
import Lecturer from './Lecturer/Lecturer';
import Home from './Home';
import { connect } from 'react-redux';

class App extends React.Component {
    renderedScreen() {
        switch(this.props.screen) {
            case 0:
                return <Home />
            case 1:
                return <Student /> ;
            case 2:
                return <Lecturer />
            default:
                return <h1>Error Rendering App</h1>;
        }
    }

    render() {
        return this.renderedScreen();
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.App.get('screen')
    }
}

export default connect(mapStatetoProps)(App);