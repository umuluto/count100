import React from "react";
import { connect } from 'react-redux';
import simplifiableActions from '../actions/simplifiable-actions';

class AddFormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Question: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.questionChange = this.questionChange.bind(this);
    this.cancelUpd = this.cancelUpd.bind(this);
  }

  componentDidMount() {
    this.setState({
      Question: this.props.Question.toString()
    })
  }

  questionChange(e) {
    this.setState({ Question: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    var Question = parseInt(this.state.Question)
    if (Question < 0) {
      window.alert('Số câu hỏi không thể là số âm')
      return;
    }
    if (Question > 5) {
      window.alert('Không được phép tạo quá 5 câu hỏi')
      return;
    }
    this.props.propUpd(Question);
  }
  cancelUpd() {
    this.props.updcan();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="well">
        <h1 style={{ fontSize: "30px" }}>
          Thay Đổi Số Câu Hỏi
        </h1>
        <br></br>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            onChange={this.questionChange}
            value={this.state.Question}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Lưu lại thay đổi
        </button>
        &nbsp;
        <button
          type="button"
          onClick={this.cancelUpd}
          className="btn btn-default"
        >
          Hủy
          </button>
      </form>
    );
  }
}

class TableBody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.updateBtn = this.updateBtn.bind(this);
  }

  updateBtn(e) {
    this.props.updateQuestion()
  }

  render() {
    return (
      <tr>
        <td>Số câu hỏi </td>
        <td>{this.props.Question}</td>
        <td>
          <button
            onClick={this.updateBtn}
            className="btn btn-xs btn-default"
          >
            Chỉnh sửa
          </button>
        </td>
      </tr>
    );
  }
}

class Simplifiable extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      Question: 0,
      isUpdate: false
    };
    this.cancelUpd = this.cancelUpd.bind(this);
    this.propcessUpd = this.propcessUpd.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  updateQuestion() {
    this.setState({
      isUpdate: true
    })
  }

  cancelUpd() {
    this.setState({
      isUpdate: false
    })
  }

  propcessUpd(value) {
    this.setState({
      isUpdate: false,
      Question: value
    });
  }

  componentDidMount() {
    this.setState({
      Question: this.props.Question,
      isUpdate: false
    })
  }

  componentWillUnmount() {
    this.props.updateQuestion(this.state.Question)
  }

  render() {
    return (
      <div className="row margin-top">
        <div className="col-md-4">
          {
            (this.state.isUpdate === true) ? (
              <AddFormData onAdd={this.onAddForm}
                upd={this.state.UPD}
                updcan={this.cancelUpd}
                propUpd={this.propcessUpd}
                Question={this.state.Question} />
            ) : null
          }
        </div>
        <div className="col-md-8">
          <table
            className="table table-hover table-striped table-bordered"
            id="tableSample"
          >
            <tbody>
              <TableBody
                Question={this.state.Question}
                updateQuestion={this.updateQuestion}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (store) => {
  return {
    Question: store.Simplifiable.get('noQuestions')
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    updateQuestion: (data) => dispatch(simplifiableActions(data))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Simplifiable);
