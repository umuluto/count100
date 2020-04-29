import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import AnswerButton from './GamePlayStuff/AnswerButton';
import StopButton from './GamePlayStuff/StopButton';
import FillableSquare from './GamePlayStuff/FillableSquare';
import Baloon from './GamePlayStuff/Baloon';
import OldFraction from './GamePlayStuff/OldFraction';
import './GamePlayStuff/FillForm.css';



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
    if(this.state.gcd % this.props.answers[x] === 0) {
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
      this.props.continueGame();      
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
          <div>

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
                  : props => <OldFraction 
                  numerator = {this.props.numerator}
                  denominator = {this.props.denominator}
                  coordLeft = {-75}
                  coordTop = {80}
                >
    
                </OldFraction>
              }
            </Transition>
            
          {/*  */}
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
                                coordLeft = {0}
                               // coordTop = {-165}
                                displayed = {"none"}
                             ></Baloon>
                  : props =>  <Baloon

                                coordLeft = {10}
                                coordTop = {-164}
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
          </div>
            
                        
            
            <Transition
              items={this.state.showFillableForm}
              from={{ position: 'absolute', opacity: 0, marginLeft : -300 }}
              enter={{ opacity: 1, marginLeft : -300 }}
              leave={{ opacity: 0, marginLeft: -300 }}
              config={{duration: 0}}
              >
              {show =>
                show
                  ? props => <div className="title win" style={{marginLeft : 50}}>Bạn có thể rút gọn phân số đã cho bằng số nào?</div>
                  : props =>  <div className="title win" style={{marginLeft : 30}}>Điền vào ô trống phân số đã cho sau khi được rút gọn cho  {this.state.divider} </div>
              }
            </Transition>



            <div className="button-container" style={{
              marginLeft: 100,
              textAlign: 'center'
            }}>
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
                      buttonSize = {'40px'}
                      handleAnswer = {() => this.handleAnswer(0)}
                    ></AnswerButton>

                    <AnswerButton 
                      divider = {this.props.answers[1]}
                      buttonSize = {'40px'}
                      handleAnswer = {() => this.handleAnswer(1)}
                    ></AnswerButton>


                    <AnswerButton 
                      divider = {this.props.answers[2]}
                      buttonSize = {'40px'}
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