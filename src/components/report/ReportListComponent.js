import React from "react";
import ReportListItemComponent from "./ReportListItemComponent";
import { getReports } from "../../actions/ReportAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ReportListComponent.css";
class ReportListComponent extends React.Component {
  componentDidMount() {
    this.props.getReports();
  }

  render() {
    const { reports } = this.props.reports;
    return (
      <div className="reports">
        <div className="container">
          <div className="row">
            <div className="col-md-11">
              {/* <h1 className="display-4 text-center">Test List</h1> */}
              <br />
              <br />
              <h1 className="text-body-secondary font-weight-bold text-center">
                Report List
              </h1>
              <br />
              {reports.map((report) => (
                <ReportListItemComponent key={report.id} report={report} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReportListComponent.propTypes = {
  getReports: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  reports: state.reports,
});
export default connect(mapStateToProps, { getReports })(ReportListComponent);
