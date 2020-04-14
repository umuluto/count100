import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import AnswerButton from './GamePlayStuff/AnswerButton';
import StopButton from './GamePlayStuff/StopButton';
import FillableSquare from './GamePlayStuff/FillableSquare';
import Baloon from './GamePlayStuff/Baloon';


function gcd_two_numbers(x, y) {
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

class GamePlay extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      divider: 101,
      gcd: gcd_two_numbers(this.props.denominator, this.props.numerator),
      showFillableForm: true
    }
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleTerminate = this.handleTerminate.bind(this);
  }

  handleAnswer(x) {
    if(this.state.gcd % this.props.answers[x] == 0) {
      this.setState({
        showFillableForm: !this.state.showFillableForm,
        divider: this.props.answers[x]
      });
    }
    else {
      alert('Ôi không trả lời sai rồi.')
    }
  }

  handleTerminate(){
    console.log("gameplay1");
    console.log(this.state);
    if(this.state.gcd === 1) {
      console.log("gameplay2");
      this.props.terminateGame();      
    }
    else {
      alert('Hình như phân số vẫn chưa tối giản thì phải?');
    }
  }

  checkAnswer(x, y) {
    console.log(this.state, this.props.numerator / this.state.divider, this.props.denominator / this.state.divider, x, y);
    if(x === this.props.numerator / this.state.divider && y === this.props.denominator / this.state.divider) {
      console.log("ok");
      this.props.continueGame();
    }
    else {

    }
  }

  render() {
   
      return (
        
        <div className="scene">
            <Transition
              items={this.state.showFillableForm}
              from={{ opacity: 0}}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{duration: 0}}
              >
              {show =>
                show
                  ? props => <Baloon
                                numerator = {this.props.numerator}
                                denominator = {this.props.denominator}
                                coord = {0}
                                displayed = {"none"}
                             ></Baloon>
                  : props =>  <Baloon

                                  coord = {10}
                              ></Baloon>
              }
            </Transition>

            <Transition
              items={this.state.showFillableForm}
              from={{ opacity: 0}}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{duration: 0}}
              >
              {show =>
                show
                  ? props => <div></div>
                  : props => <FillableSquare
                    checkAnswer = {this.checkAnswer}
                  ></FillableSquare>   
              }
            </Transition>
                        
            
            <Transition
              items={this.state.showFillableForm}
              from={{ position: 'absolute', opacity: 0, marginLeft : -300 }}
              enter={{ opacity: 1, marginLeft : -300 }}
              leave={{ opacity: 0, marginLeft: -300 }}
              config={{duration: 0}}
              >
              {show =>
                show
                  ? props => <div class="title win" style={{marginLeft : 0}}>Which number can you reduce the fraction by?</div>
                  : props =>  <div class="title win" style={{marginLeft : 30}}>Fill in the fraction after reducing it by the choosen divisor</div>
              }
            </Transition>



            <div className="button-container">
              <Transition
                items={this.state.showFillableForm}
                from={{opacity : 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
                config={{duration: 750}}
              >
                {show => show && (props => (
                  <animated.div style={props}>
                    <AnswerButton 
                      divider = {this.props.answers[0]}
                      buttonSize = {'60.5px'}
                      handleAnswer = {() => this.handleAnswer(0)}
                    ></AnswerButton>

                    <AnswerButton 
                      divider = {this.props.answers[1]}
                      buttonSize = {'60.5px'}
                      handleAnswer = {() => this.handleAnswer(1)}
                    ></AnswerButton>


                    <AnswerButton 
                      divider = {this.props.answers[2]}
                      buttonSize = {'59.5px'}
                      handleAnswer = {() => this.handleAnswer(2)}
                    ></AnswerButton>

                    <StopButton
                      handleStop = {() => this.handleTerminate()}
                    >
                    </StopButton>
                  </animated.div>
                ))}
              </Transition>
              
            </div>
          </div>
      )
  }
}

export default GamePlay;