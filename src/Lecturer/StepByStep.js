import React from "react";
import { connect } from 'react-redux';
import stepByStepActions from '../actions/step-by-step-action';

class AddFormData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numerator: "", denominator: "" };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.numeratorChange = this.numeratorChange.bind(this);
        this.denominatorChange = this.denominatorChange.bind(this);
        this.cancelUpd = this.cancelUpd.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.upd.id) {
            this.setState({
                numerator: nextProps.upd.numerator,
                denominator: nextProps.upd.denominator
            })
        } else {
            this.setState({ numerator: "", denominator: ""});
        }
    }

    numeratorChange(e) {
        this.setState({ numerator: e.target.value });
    }

    denominatorChange(e) {
        this.setState({ denominator: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        var numerator = parseInt(this.state.numerator);
        var denominator = parseInt(this.state.denominator);

        if(isNaN(numerator) || isNaN(denominator)) {
            return window.alert('Hãy điền đầy đủ vào 2 ô');
        }

        if(numerator <= 0 || denominator <= 0) {
            return window.alert('Tử số mẫu số phải là số dương');
        }

        if(numerator % denominator === 0) {
            return window.alert('Tử số không được chia hết cho mẫu số');
        }

        if(this.props.upd.id) {
            this.props.propUpd({
                id: this.props.upd.id,
                numerator: this.state.numerator,
                denominator: this.state.denominator
            });
        } else {
            var formVal = {
                numerator: this.state.numerator,
                denominator: this.state.denominator
            };
            this.props.onAdd(formVal);
        }
        this.setState({ numerator: "", denominator : ""});
    }

    cancelUpd() { 
        this.props.updCan();
        this.setState({ numerator: "", denominator: ""});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="well">
              <h1 style={{ fontSize: "30px" }}>
                {this.props.upd.id ? "Cập Nhật Lại Câu Hỏi" : "Thêm Câu Hỏi"}
              </h1>
              <br></br>
              <div className="form-group">
                <label style={{ fontSize: "15px" }}>Tử Số</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={this.numeratorChange}
                  value={this.state.numerator}
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: "15px" }}>Mẫu Số</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={this.denominatorChange}
                  value={this.state.denominator}
                />
              </div>
              <button type="submit" className="btn btn-success">
                {this.props.upd.id ? "Lưu lại thay đổi" : "Xác nhận thêm"}
              </button>
              &nbsp;
              {this.props.upd.id ? (
                <button
                  type="button"
                  onClick={this.cancelUpd}
                  className="btn btn-default"
                >
                  Hủy
                </button>
              ) : null}
            </form>
          );
    }
}

class TableRow extends React.Component {
    constructor(props, context){
        super(props, context);
        this.updateBtn = this.updateBtn.bind(this);
        this.handleCbox = this.handleCbox.bind(this);
    }

    updateBtn(e) {
        this.props.onUpd(e.target.dataset.item);
    }

    handleCbox() {
        this.props.switchToggleOn(this.props.id - 1);
        var cnt = document
            .getElementById("tableSample")
            .querySelectorAll("input[type='checkbox'][name='cbox']:checked");

        if (cnt.length) {
            document.getElementById("del_rowBtn").style.display = "block";
        } else {
            document.getElementById("del_rowBtn").style.display = "none";
        }
        this.props.canHan();
    }

    render() {
        const divStyle = {
            margin: 0
        };
        return(
            <tr id={"tr-" + this.props.TRs.id.toString()}>
                <td>
                <div className="checkbox" style={divStyle}>
                    <label>
                    <input
                        name="cbox"
                        onChange={this.handleCbox}
                        type="checkbox"
                        id={"check_bx" + this.props.TRs.id}
                        value={this.props.TRs.id}
                    />
                    &nbsp;{this.props.TRs.id}
                    </label>
                </div>
                </td>
                <td>{this.props.TRs.numerator}</td>
                <td>{this.props.TRs.denominator}</td>
                <td>
                {this.props.isToggleOn === true ? (
                    <button disabled className="btn btn-xs btn-default">
                    Chỉnh sửa
                    </button>
                ) : (
                    <button
                        onClick={this.updateBtn}
                        data-item={this.props.TRs.id}
                        className="btn btn-xs btn-default"
                    >
                        Chỉnh sửa
                    </button>
                    )}
                </td>
            </tr>
        )
    }
}

class StepByStep extends React.Component {
    constructor(props, context) {
        super(props);

        this.state = {
            TRs: [],
            UPD: []
        };

        this.deleteRow = this.deleteRow.bind(this);
        this.onAddForm = this.onAddForm.bind(this);
        this.delNrow = this.delNrow.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.cancelUpd = this.cancelUpd.bind(this);
        this.processUpd = this.processUpd.bind(this);
        this.switchToggleOn = this.switchToggleOn.bind(this);
        
        console.log("Yes");
    }

    switchToggleOn = (pos) => {
        var nextTRs = this.state.TRs;
        nextTRs[pos].isToggleOn = !nextTRs[pos].isToggleOn;
        this.setState({
            TRs: nextTRs
        });
    }

    deleteRow(z) {
        var array = this.state.TRs;
        var index = array.findIndex((e) => e.id === parseInt(z));
        array.splice(index, 1);
        this.setState({ TRs: array });
    }

    delNrow() {
        if(window.confirm('Bạn chắc chưa???')) {
            const tbox = document.getElementById('tableSample').querySelectorAll("input[type='checkbox'][name='cbox']:checked");
            var arr = []; var i;
            for(i = 0; i < tbox.length; ++i) {
                arr.push(parseInt(tbox[i].value));
                tbox[i].checked = false;
            }
            for(i = 0; i < arr.length; ++i) {
                this.deleteRow(arr[i]);
            }
            var foo = this.state.TRs;
            for(i = 0; i < foo.length; ++i) {
                foo[i].id = i + 1;
                foo[i].isToggleOn = false;
            }
            this.setState({ TRs: foo });
            document.getElementById("del_rowBtn").style.display = "none";
        }
    }

    onAddForm(formVal) {
        var ctr = this.state.TRs.length + 1;
        if(ctr > 5) {
            this.setState({
                UPD: {}
            });
            return alert('Sống chậm thôi cô ơi, 5 câu là quá nhiều rồi ;)');
        }
        var Ndata = {
            id: ctr,
            numerator: formVal.numerator,
            denominator: formVal.denominator,
            isToggleOn: false
        };
        this.setState({ TRs: this.state.TRs.concat([Ndata]), UPD: {} });
    }

    updateRow(x) {
        var array = this.state.TRs;
        var index = array.findIndex((e) => e.id === parseInt(x));
        this.setState({
            UPD: this.state.TRs[index],
        });
    }

    cancelUpd() {
        this.setState({ UPD: [] });
    }

    processUpd(formVal) {
        var obj = this.state.TRs;
        var index = obj.findIndex((e) => e.id === parseInt(formVal.id));
        obj[index] = formVal;
        console.log(formVal, index);
        this.setState({TRs: obj, UPD: []});
    }

    componentDidMount() {
        var array = this.props.listQuestion.map(value => ({
            id: value.id,
            numerator: value.numerator.toString(),
            denominator: value.denominator.toString(),
            isToggleOn: false
        }));
        this.setState({
            TRs: array
        })
    }

    componentWillUnmount() {
        this.props.updateQuestion(this.state.TRs);
    }

    render() {
        const display = {
            display: "none",
          };
          const tRow = this.state.TRs.map((tr) => (
            <TableRow
              onUpd={this.updateRow}
              TRs={tr}
              id={tr.id}
              key={tr.id}
              canHan={this.cancelUpd}
              isToggleOn={tr.isToggleOn}
              switchToggleOn={(pos) => this.switchToggleOn(pos)}
            />
          ));
      
          return (
            <div className="row margin-top">
              <div className="col-md-4">
                <AddFormData onAdd={this.onAddForm}
                  upd={this.state.UPD}
                  updcan={this.cancelUpd}
                  propUpd={this.processUpd} />
              </div>
              <div className="col-md-8">
                <div className="row h35">
                  <div className="col-md-6">
                    <button
                      onClick={this.delNrow}
                      id="del_rowBtn"
                      className="btn btn-xs btn-default"
                      style={display}
                    >
                      Xóa câu hỏi
                    </button>
                  </div>
                  <div className="col-md-offset-2 col-md-4"></div>
                </div>
                <table
                  className="table table-hover table-striped table-bordered"
                  id="tableSample"
                >
                  <thead>
                    <tr>
                      <th style={{ width: "75px" }}>Số thứ tự</th>
                      <th>Tử số</th>
                      <th>Mẫu số</th>
                      <th>Tùy chọn</th>
                    </tr>
                  </thead>
                  <tbody>{tRow}</tbody>
                </table>
              </div>
            </div>
          );
    }
}

const mapStatetoProps = (store) => {
    return {
        listQuestion: store.StepByStep.get('listQuestion').toJS()
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        updateQuestion: (data) => dispatch(stepByStepActions.modifyQuestion(data))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (StepByStep);