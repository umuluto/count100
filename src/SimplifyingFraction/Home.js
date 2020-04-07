import React from 'react';
import Form from './Form';

var createReactClass=require('create-react-class');

var HomeScreen = createReactClass({
    render: function() {
      return (
        <div>
          <div className="uchiru_bg_cell" />
          <div className="uchiru_bg_color" />
          <div className="uchiru_bg_stuff" />
          <img className="uchiru_bg_color" src="https://content.dragonlearn.in/fp/97/fat_player/student/grad-f07e854ce64f9aee2db7bd67146ff0e4800feeed40c8f7116fcb3b6a048deb64.jpg" />
          <div className="uchiru_box">
            <div className="uchiru_head card with_progress">
              <a className="back-link" style={{}} href="/home.html">
                <div className="arrow-left" />
                <span>     Back</span>
              </a>
            </div>
            <div className="card_content">
              <div id="board" className="uchiru-place card player-1 script3771 fixed run_on_windows cr" style={{lineHeight: '1.29'}}>
                <div className="btn_play">
                  <div className="triangle"><span>start</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

class Home extends React.Component {
    render() {
        return (
            <HomeScreen />
        );
    }
}

export default Home;