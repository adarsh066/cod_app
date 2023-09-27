import React from "react";
import "./ReportListItemComponent.css";
import { deleteReport } from "../../actions/ReportAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class ReportListItemComponent extends React.Component {
  onDeleteClick = (id) => {
    // console.log(id);
    this.props.deleteReport(id);
  };
  render() {
    const { report } = this.props;
    return (
      <div className="container">
        <div className="card card-body background mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{report.reportIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{report.reportName}</h3>
              <h5>{report.batchName}</h5>
              <h6>{report.technologyName}</h6>
              <h6>{report.reportdescription}</h6>
              <p></p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="custom-flex-box col-lm-4">
                <a href="#">
                  {/* <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">Report Board</i>
                  </li> */}
                </a>
                <Link to={`/updateReport/${report.reportIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Report Info</i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete red"
                  onClick={this.onDeleteClick.bind(
                    this,
                    report.reportIdentifier
                  )}
                >
                  <i className="fa fa-minus-circle pr-1 delete">
                    Delete Report
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReportListItemComponent.propTypes = {
  deleteReport: PropTypes.func.isRequired,
};
export default connect(null, { deleteReport })(ReportListItemComponent);
