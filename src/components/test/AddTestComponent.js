import React from "react";
import { createTest } from "../../actions/TestAction";
import { connect } from "react-redux";
import withRouter from "../commons/withRouter";

class AddTestComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      testName: "",
      testIdentifier: "",
      testdescription: "",
      test_start_date: "",
      test_end_date: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault(); //stops browser refresh
    // console.log("--Submit called---");
    const newTest = {
      testName: this.state.testName,
      testIdentifier: this.state.testIdentifier,
      testdescription: this.state.testdescription,
      test_start_date: this.state.test_start_date,
      test_end_date: this.state.test_end_date,
    };

    //Call axios method over here to send the call on backend
    this.props.createTest(newTest);
    this.props.navigate("/listTest");
    // console.log(newTest);
  };
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto ">
              <br />
              <h5 className="h1 text-center">Create Test</h5>

              <form onSubmit={this.onSubmit}>
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control form-control-lg background "
                    placeholder="Test Name"
                    name="testName"
                    value={this.state.testName}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg background"
                    placeholder="Unique Test ID"
                    name="testIdentifier"
                    value={this.state.testIdentifier}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                {/* disabled for Edit Only!! remove "disabled" for the Create operation */}
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg background"
                    placeholder="Test Description"
                    name="testdescription"
                    value={this.state.testdescription}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <br />
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg background"
                    name="test_start_date"
                    value={this.state.test_start_date}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg background"
                    name="test_end_date"
                    value={this.state.test_end_date}
                    onChange={this.onChange}
                  />
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
export default connect(null, { createTest })(withRouter(AddTestComponent));
