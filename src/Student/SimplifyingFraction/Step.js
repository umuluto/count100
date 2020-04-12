import React from 'react';
import Step0 from './Step0.js';
import Step1 from './Step1.js';

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            divisor: 0,
            numerator: this.props.numerator,
            denominator: this.props.denominator,
        }
        this.switchStep = this.switchStep.bind(this)
        this.setDivisor = this.setDivisor.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            numerator: nextProps.numerator,
            denominator: nextProps.denominator
        })
    }

    changeInfo(foo, bar) {
        console.log(foo, bar)
        this.setState({
            numerator: foo,
            denominator: bar
        })
    } 

    switchStep() {
        this.setState({
            step: 1 - this.state.step
        })
    }

    setDivisor = (divisor) => {
        this.setState({
            divisor: divisor
        })
    }

    render() {
        switch (this.state.step) {
            case 0:
                return (
                    <Step0 
                    numerator={this.state.numerator}
                    denominator={this.state.denominator}
                    switchStep={this.switchStep}
                    setDivisor={(divisor) => this.setDivisor(divisor)}
                    />
                );
            case 1:
                return (
                    <Step1 
                    numerator={this.state.numerator}
                    denominator={this.state.denominator}
                    divisor={this.state.divisor}
                    switchStep={this.switchStep}
                    nextExam={this.props.nextExam}
                    changeInfo={(foo, bar) => this.changeInfo(foo, bar)}
                    />
                );
            default:
                return (
                    <h1>Error rendering</h1>
                );
        }
    }
}

export default Step;