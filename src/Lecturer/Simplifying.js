import React from "react";

// <AddFormData onAdd={this.onAddForm}
//                         upd={this.state.UPD}
//                         updcan={this.cancelUpd}
//                         propUpd={this.propcessUpd} />

class AddFormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numerator: "", denominator: "" };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.textNameChange = this.textNameChange.bind(this);
    this.textDescChange = this.textDescChange.bind(this);
    this.cancelUpd = this.cancelUpd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.upd.id) {
      this.setState({
        numerator: nextProps.upd.numerator,
        denominator: nextProps.upd.denominator,
      });
    } else {
      this.setState({ numerator: "", denominator: "" });
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
    if (this.props.upd.id) {
      // update component
      this.props.propUpd({
        id: this.props.upd.id,
        numerator: this.state.numerator,
        denominator: this.state.denominator,
      });
    } else {
      var formVal = {
        numerator: this.state.numerator,
        denominator: this.state.denominator,
      };
      this.props.onAdd(formVal);
    }
    this.setState({ numerator: "", denominator: "" });
  }
  cancelUpd() {
    this.props.updcan();
    this.setState({ numerator: "", denominator: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="well">
        <h1 style={{ fontSize: "30px" }}>
          {this.props.upd.id ? "Cập Nhật Lại Câu Hỏi" : "Thêm Câu Hỏi"}
        </h1>
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

class TableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isToggleOn: false };
    this.updateBtn = this.updateBtn.bind(this);
    this.handleCbox = this.handleCbox.bind(this);
  }

  updateBtn(e) {
    this.props.onUpd(e.target.dataset.item);
  }

  handleCbox() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    // var cnt = $('#tableSample').find('input:checkbox[name=cbox]:checked');
    // if (cnt.length) {
    //     $('#del_rowBtn').show();
    // } else {
    //     $('#del_rowBtn').hide();
    // }
    var cnt = document
      .getElementById("tableSample")
      .querySelectorAll("input[type='checkbox'][name='cbox']:checked");

    console.log(cnt);
    if (cnt.length) {
      //   $("#del_rowBtn").show();
      document.getElementById("del_rowBtn").style.display = "block";
    } else {
      //   $("#del_rowBtn").hide();
      document.getElementById("del_rowBtn").style.display = "none";
    }
    this.props.canHan();
  }

  render() {
    const divStyle = {
      margin: 0,
    };

    return (
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
          {this.state.isToggleOn ? (
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
    );
  }
}

class Simplifying extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      TRs: [
        {
          id: 1,
          numerator: "9",
          denominator: "12",
        },
      ],
      UPD: [],
    };
    this.deleteRow = this.deleteRow.bind(this);
    this.onAddForm = this.onAddForm.bind(this);
    //this.delNrow = this.delNrow.bind(this);
    this.updateRow = this.updateRow.bind(this);
    this.cancelUpd = this.cancelUpd.bind(this);
    this.propcessUpd = this.propcessUpd.bind(this);
  }
  // delete multiple data
  deleteRow(z) {
    var array = this.state.TRs;
    var index = array.findIndex((e) => e.id == z);
    array.splice(index, 1);
    this.setState({ TRs: array });
  }

  // delNrow() {
  //     var cof = confirm('are you sure !!');
  //     if (cof) {
  //         const tbox = $('#tableSample').find('input:checkbox[name=cbox]:checked');
  //         var arr = [];
  //         tbox.each(function () {
  //             arr.push(parseInt($(this).val()));
  //         });
  //         for (var i = 0; i < arr.length; i++) {
  //             this.deleteRow(arr[i]);
  //         }
  //         document.getElementById("del_rowBtn").hide();
  //     }
  // } // end of delete function

  onAddForm(formVal) {
    var ctr = this.state.TRs.length + 1;
    var Ndata = {
      id: ctr,
      numerator: formVal.numerator,
      denominator: formVal.denominator,
    };
    this.setState({ TRs: this.state.TRs.concat([Ndata]), UPD: {} });
  }

  updateRow(x) {
    var array = this.state.TRs;
    var index = array.findIndex((e) => e.id == x);
    this.setState({
      UPD: this.state.TRs[index],
    });
  }

  cancelUpd() {
    this.setState({ UPD: [] });
  }

  propcessUpd(formVal) {
    var obj = this.state.TRs;
    var index = obj.findIndex((e) => e.id == formVal.id);
    obj[index] = formVal;
    this.setState({ TRs: obj, UPD: [] });
  }

  componentDidMount() {
    // this.setState({ TRs: this.props.tableRow })
  }

  render() {
    const display = {
      display: "none",
    };
    const tRow = this.state.TRs.map((tr) => (
      <TableBody
        onUpd={this.updateRow}
        TRs={tr}
        key={tr.id}
        canHan={this.cancelUpd}
      />
    ));

    return (
      <div className="row margin-top">
        <div className="col-md-4">
          {/* <AddFormData onAdd={this.onAddForm}
                        upd={this.state.UPD}
                        updcan={this.cancelUpd}
                        propUpd={this.propcessUpd} /> */}
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

export default Simplifying;
