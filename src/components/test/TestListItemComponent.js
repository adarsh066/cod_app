import React from "react";
import "../test/TestListItemComponent.css";

class TestListItemComponent extends React.Component {
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
              {/* <ul className="list-group"> */}
              <ul className=" custom-flex-box col-lm-4">
                {/* <a href="#">
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                </li>
                            </a> */}
                <a href="#">
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1 ">Update Test</i>
                  </li>
                </a>
                <a href="">
                  <li className="list-group-item delete red">
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
export default TestListItemComponent;
