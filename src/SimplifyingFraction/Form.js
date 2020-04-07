import React from 'react';

var createReactClass = require('create-react-class');

function gcd_two_numbers(x, y) {
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numerator: this.props.numerator,
            denominator: this.props.denominator
        }
    }

    render() {
        return (
            <div>
            <div style={{width: 0, height: 0, overflow: 'hidden'}}>
            <span style={{fontFamily: '"Noto Sans" !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"PT Sans" !important'}}>.</span>
            <span style={{fontFamily: '"PT Serif" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded-Regular" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded-Alt-Bold" !important'}}>.</span>
            <span style={{fontFamily: '"Circe" !important'}}>.</span>
            <span style={{fontFamily: '"Circe" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"Circe-Regular" !important'}}>.</span>
            <span style={{fontFamily: '"Circe-Bold" !important'}}>.</span>
            <span style={{fontFamily: '"DejaVu Sans" !important'}}>.</span>
            <span style={{fontFamily: '"Neucha" !important'}}>.</span>
            </div>
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
                        <div>
                            <div className="grid">
                                <div className="grid_part vertical_grid">
                                    <div className="grid_column"><span className="__cnd">0</span></div>
                                    <div className="grid_column"><span className="__cnd">1</span></div>
                                    <div className="grid_column"><span className="__cnd">2</span></div>
                                    <div className="grid_column"><span className="__cnd">3</span></div>
                                    <div className="grid_column"><span className="__cnd">4</span></div>
                                    <div className="grid_column"><span className="__cnd">5</span></div>
                                    <div className="grid_column"><span className="__cnd">6</span></div>
                                    <div className="grid_column"><span className="__cnd">7</span></div>
                                    <div className="grid_column"><span className="__cnd">8</span></div>
                                    <div className="grid_column"><span className="__cnd">9</span></div>
                                    <div className="grid_column"><span className="__cnd">10</span></div>
                                    <div className="grid_column"><span className="__cnd">11</span></div>
                                    <div className="grid_column"><span className="__cnd">12</span></div>
                                    <div className="grid_column"><span className="__cnd">13</span></div>
                                    <div className="grid_column"><span className="__cnd">14</span></div>
                                    <div className="grid_column"><span className="__cnd">15</span></div>
                                    <div className="grid_column"><span className="__cnd">16</span></div>
                                    <div className="grid_column"><span className="__cnd">17</span></div>
                                    <div className="grid_column"><span className="__cnd">18</span></div>
                                    <div className="grid_column"><span className="__cnd">19</span></div>
                                    <div className="grid_column"><span className="__cnd">20</span></div>
                                    <div className="grid_column"><span className="__cnd">21</span></div>
                                    <div className="grid_column"><span className="__cnd">22</span></div>
                                    <div className="grid_column"><span className="__cnd">23</span></div>
                                    <div className="grid_column"><span className="__cnd">24</span></div>
                                    <div className="grid_column"><span className="__cnd">25</span></div>
                                    <div className="grid_column"><span className="__cnd">26</span></div>
                                    <div className="grid_column"><span className="__cnd">27</span></div>
                                    <div className="grid_column"><span className="__cnd">28</span></div>
                                    <div className="grid_column"><span className="__cnd">29</span></div>
                                    <div className="grid_column"><span className="__cnd">30</span></div>
                                    <div className="grid_column"><span className="__cnd">31</span></div>
                                    <div className="grid_column"><span className="__cnd">32</span></div>
                                    <div className="grid_column"><span className="__cnd">33</span></div>
                                    <div className="grid_column"><span className="__cnd">34</span></div>
                                    <div className="grid_column"><span className="__cnd">35</span></div>
                                    <div className="grid_column"><span className="__cnd">36</span></div>
                                    <div className="grid_column"><span className="__cnd">37</span></div>
                                    <div className="grid_column"><span className="__cnd">38</span></div>
                                    <div className="grid_column"><span className="__cnd">39</span></div>
                                    <div className="grid_column"><span className="__cnd">40</span></div>
                                    <div className="grid_column"><span className="__cnd">41</span></div>
                                    <div className="grid_column"><span className="__cnd">42</span></div>
                                    <div className="grid_column"><span className="__cnd">43</span></div>
                                    <div className="grid_column"><span className="__cnd">44</span></div>
                                    <div className="grid_column"><span className="__cnd">45</span></div>
                                    <div className="grid_column"><span className="__cnd">46</span></div>
                                    <div className="grid_column"><span className="__cnd">47</span></div>
                                </div>
                                <div className="grid_part horizontal_grid">
                                    <div className="grid_row" />
                                    <div className="grid_row"><span className="__cnd">1</span></div>
                                    <div className="grid_row"><span className="__cnd">2</span></div>
                                    <div className="grid_row"><span className="__cnd">3</span></div>
                                    <div className="grid_row"><span className="__cnd">4</span></div>
                                    <div className="grid_row"><span className="__cnd">5</span></div>
                                    <div className="grid_row"><span className="__cnd">6</span></div>
                                    <div className="grid_row"><span className="__cnd">7</span></div>
                                    <div className="grid_row"><span className="__cnd">8</span></div>
                                    <div className="grid_row"><span className="__cnd">9</span></div>
                                    <div className="grid_row"><span className="__cnd">10</span></div>
                                    <div className="grid_row"><span className="__cnd">11</span></div>
                                    <div className="grid_row"><span className="__cnd">12</span></div>
                                    <div className="grid_row"><span className="__cnd">13</span></div>
                                    <div className="grid_row"><span className="__cnd">14</span></div>
                                    <div className="grid_row"><span className="__cnd">15</span></div>
                                    <div className="grid_row"><span className="__cnd">16</span></div>
                                    <div className="grid_row"><span className="__cnd">17</span></div>
                                    <div className="grid_row"><span className="__cnd">18</span></div>
                                    <div className="grid_row"><span className="__cnd">19</span></div>
                                    <div className="grid_row"><span className="__cnd">20</span></div>
                                    <div className="grid_row"><span className="__cnd">21</span></div>
                                    <div className="grid_row"><span className="__cnd">22</span></div>
                                    <div className="grid_row"><span className="__cnd">23</span></div>
                                    <div className="grid_row"><span className="__cnd">24</span></div>
                                    <div className="grid_row"><span className="__cnd">25</span></div>
                                    <div className="grid_row"><span className="__cnd">26</span></div>
                                    <div className="grid_row"><span className="__cnd">27</span></div>
                                </div>
                            </div>
                            <div className="task">Reducing fractions</div>
                            <div className="sub_task">Write the number which both the numerator and the denominator can be divided by</div>
                            <div className="action_wrap">
                            <div className="expression_wrap" style={{width: '302px'}}>
                                <div className="fraction">
                                <div className="numerator">
                                    <div className="f-input blank">
                                    <div className="__outer">
    <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.state.numerator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage blank" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="dash" />
                                <div className="denominator">
                                    <div className="f-input blank">
                                    <div className="__outer">
                                        <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.state.denominator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage blank" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="sign_equal">=</div>
                                <div className="fraction">
                                <div className="numerator">
                                    <div className="f-input blank">
                                    <div className="__outer">
                                        <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.state.numerator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage" />
                                        </div>
                                    </div>
                                    </div><span style={{position: 'relative', top: '8px'}}>÷</span>
                                    <div className="f-input active">
                                    <div className="__outer">
                                        <div className="__inner"><span style={{width: '0px', marginTop: '-3px'}} /><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="dash" />
                                <div className="denominator">
                                    <div className="f-input blank">
                                    <div className="__outer">
                                        <div className="__inner"><span style={{width: '29px', marginTop: '-3px'}}>{this.state.denominator}</span><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage" />
                                        </div>
                                    </div>
                                    </div><span style={{position: 'relative', top: '8px'}}>÷</span>
                                    <div className="f-input active">
                                    <div className="__outer">
                                        <div className="__inner"><span style={{width: '0px', marginTop: '-3px'}} /><span style={{width: '0px', marginTop: '-3px'}} />
                                        <div className="__carriage" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Form;