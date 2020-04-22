import React from 'react'
import ReactDOM from 'react-dom'
import './temp.css'

function Wagon(props) {
  return (
    <div className={`wagon wagon--${props.type} wagon--${props.pos}`}>
      <div className={`wagon__num wagon__num--${props.type}`}>
        {props.id}
      </div>
    </div>
  )
}

function Holder(props) {
  return (
    <div className={`holder holder--${props.type}`}>
      <div className='holder__empty'>
        {props.children}
      </div>
    </div>
  )
}

function Railway(props) {
  const wagons = React.Children.toArray(props.children);
  while (wagons.length < 6) {
    wagons.push(null);
  }

  return (
    <div className='railway'>
      <Holder type='engine'>
        {wagons[0]}
      </Holder>
      {wagons.slice(1).map(w => <Holder>{w}</Holder>)}
    </div>
  );
}

function App() {
  return (
    <div className='train-game'>
      <Railway>
        <Wagon id='2' type='engine' pos='inplace'/>
        <Wagon id='3' pos='inplace'/>
        <Wagon id='4' pos='inplace'/>
        <Wagon id='5' pos='inplace'/>
        <Wagon id='6' pos='inplace'/>
        <Wagon id='7' pos='inplace'/>
      </Railway>
      <Wagon id='1'/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
