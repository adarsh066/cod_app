import React, { Component } from "react";
import { createTest } from "../../actions/TestAction";
import { connect } from "react-redux";
import withRouter from "../commons/withRouter";
import PropTypes from "prop-types";
import classNames from "classnames";

class AddTestComponent extends Component {
  constructor() {
    super();
    this.state = {
      testName: "",
      testIdentifier: "",
      testdescription: "",
      test_start_date: "",
      test_end_date: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps() executed because form has errors");
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault(); // Prevents browser refresh

    const newTest = {
      testName: this.state.testName,
      testIdentifier: this.state.testIdentifier,
      testdescription: this.state.testdescription,
      test_start_date: this.state.test_start_date,
      test_end_date: this.state.test_end_date,
    };

    // Call the Redux action to send the data to the backend
    this.props.createTest(newTest, this.props.navigate);
  };

  render() {
    const errors = this.state.errors;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <h5 className="h1 text-center">Create Test</h5>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames(
                      "form-control form-control-lg background",
                      {
                        "is-invalid": errors.testName,
                      }
                    )}
                    placeholder="Test Name"
                    name="testName"
                    value={this.state.testName}
                    onChange={this.onChange}
                  />
                  {errors.testName && (
                    <p className="invalid-feedback">{errors.testName}</p>
                  )}
                </div>
                {/* Repeat similar code blocks for other form fields */}
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames(
                      "form-control form-control-lg background",
                      {
                        "is-invalid": errors.testIdentifier,
                      }
                    )}
                    placeholder="Unique Test ID"
                    name="testIdentifier"
                    value={this.state.testIdentifier}
                    onChange={this.onChange}
                  />
                  {errors.testIdentifier && (
                    <p className="invalid-feedback">{errors.testIdentifier}</p>
                  )}
                </div>
                <br />
                {/* disabled for Edit Only!! remove "disabled" for the Create operation */}
                <div className="form-group">
                  <textarea
                    className={classNames(
                      "form-control form-control-lg background",
                      {
                        "is-invalid": errors.testdescription,
                      }
                    )}
                    placeholder="Test Description"
                    name="testdescription"
                    value={this.state.testdescription}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.testdescription && (
                    <p className="invalid-feedback">{errors.testdescription}</p>
                  )}
                </div>
                <br />
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className={classNames(
                      "form-control form-control-lg background",
                      {
                        "is-invalid": errors.test_start_date,
                      }
                    )}
                    name="test_start_date"
                    value={this.state.test_start_date}
                    onChange={this.onChange}
                  />
                  {errors.test_start_date && (
                    <p className="invalid-feedback">{errors.test_start_date}</p>
                  )}
                </div>
                <br />
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className={classNames(
                      "form-control form-control-lg background",
                      {
                        "is-invalid": errors.test_end_date,
                      }
                    )}
                    name="test_end_date"
                    value={this.state.test_end_date}
                    onChange={this.onChange}
                  />
                  {errors.test_start_date && (
                    <p className="invalid-feedback">{errors.test_end_date}</p>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddTestComponent.propTypes = {
  errors: PropTypes.object.isRequired,
  createTest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createTest })(
  withRouter(AddTestComponent)
);
