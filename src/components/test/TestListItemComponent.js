import React from "react";
import "../test/TestListItemComponent.css";
import { connect } from "react-redux";
import { deleteTest } from "../../actions/TestAction";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TestListItemComponent extends React.Component {
  onDeleteClick = (id) => {
    this.props.deleteTest(id);
  };

  render() {
    const { test } = this.props;
    return (
      <div className="container">
        <div className="card card-body background mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{test.testIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{test.testName}</h3>
              <p>{test.testdescription}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="custom-flex-box col-lm-4">
                <Link to={`/updateTest/${test.testIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1 ">Update Test</i>
                  </li>
                </Link>
                <a href="">
                  <li
                    className="list-group-item delete red"
                    onClick={this.onDeleteClick.bind(this, test.testIdentifier)}
                  >
                    <i className="fa fa-minus-circle pr-1">Delete Test</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TestListItemComponent.propTypes = {
  deleteTest: PropTypes.func.isRequired,
};

export default connect(null, { deleteTest })(TestListItemComponent);
