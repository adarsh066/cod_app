import React from "react";
import { getReport, createReport } from "../../actions/ReportAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withParam from "../commons/withParam";
class UpdateReportComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      reportName: "",
      reportIdentifier: "",
      reportdescription: "",
      batchName: "",
      technologyName: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      reportName,
      reportIdentifier,
      reportdescription,
      batchName,
      technologyName,
    } = nextProps.report;

    this.setState({
      id,
      reportName,
      reportIdentifier,
      reportdescription,
      batchName,
      technologyName,
    });
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.getReport(id);
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const updatedReport = {
      id: this.state.id,
      reportName: this.state.reportName,
      reportIdentifier: this.state.reportIdentifier,
      reportdescription: this.state.reportdescription,
      batchName: this.state.batchName,
      technologyName: this.state.technologyName,
    };
    this.props.createReport(updatedReport, this.props.navigate);
  };
  render() {
    return (
      <div className="container">
        <div className="create-report-form">
          <h2 className="custom-create-report-button">Edit Report</h2>

          <form onSubmit={this.onSubmit}>
            <div className="form-group custom-border">
              <input
                className="form-control form-control-lg custom-form-control"
                type="text"
                placeholder="Report Name"
                name="reportName"
                value={this.state.reportName}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group custom-border">
              <input
                className="form-control form-control-lg custom-form-control"
                type="text"
                placeholder="Unique Report ID"
                name="reportIdentifier"
                value={this.state.reportIdentifier}
                onChange={this.onChange}
                disabled
              />
            </div>

            <div className="form-group custom-border">
              <input
                className="form-control form-control-lg custom-form-control"
                type="text"
                placeholder="Report Description"
                name="reportdescription"
                value={this.state.reportdescription}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group custom-border">
              <input
                className="form-control form-control-lg custom-form-control"
                type="text"
                placeholder="Batch Name"
                name="batchName"
                value={this.state.batchName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group custom-border">
              <input
                className="form-control form-control-lg custom-form-control"
                type="text"
                placeholder="Technology Name"
                name="technologyName"
                value={this.state.technologyName}
                onChange={this.onChange}
              />
            </div>

            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }
}

UpdateReportComponent.propTypes = {
  getReport: PropTypes.func.isRequired,
  createReport: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  report: state.reports.report,
});

export default connect(mapStateToProps, { getReport, createReport })(
  withParam(UpdateReportComponent)
);
