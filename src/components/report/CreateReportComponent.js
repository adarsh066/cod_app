import React from "react";
import "./CreateReportComponent.css";
import withRouter from "../commons/withRouter";
import { connect } from "react-redux";
import { createReport } from "../../actions/ReportAction";
import PropTypes from "prop-types";
import classNames from "classnames";
class CreateReportComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      reportName: "",
      reportIdentifier: "",
      reportdescription: "",
      batchName: "",
      technologyName: "",
      errors: {},
    };
    // this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("----componentWillReceiveProps---");
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
    event.preventDefault();
    // console.log("hello------------");
    const newReport = {
      reportName: this.state.reportName,
      reportIdentifier: this.state.reportIdentifier,
      reportdescription: this.state.reportdescription,
      batchName: this.state.batchName,
      technologyName: this.state.technologyName,
    };

    //call axios method over here to send back end
    // console.log(newReport);
    // this.props.createReport(newReport);
    // this.props.navigate("/Reportlist");
    this.props.createReport(newReport, this.props.navigate);
  };
  render() {
    const errors = this.state.errors;
    return (
      <div className="container">
        <div className="create-report-form">
          <h2 className="custom-create-report-button">Create Report</h2>

          <form onSubmit={this.onSubmit}>
            <div className="form-group custom-border">
              <input
                className={classNames(
                  "form-control form-control-lg custom-form-control",
                  { "is-invalid": errors.reportName }
                )}
                type="text"
                placeholder="Report Name"
                name="reportName"
                value={this.state.reportName}
                onChange={this.onChange}
              />
              {errors.reportName && (
                <p className="invalid-feedback">{errors.reportName}</p>
              )}
            </div>

            <div className="form-group custom-border">
              <input
                className={classNames(
                  "form-control form-control-lg custom-form-control",
                  { "is-invalid": errors.reportIdentifier }
                )}
                type="text"
                placeholder="Unique Report ID"
                name="reportIdentifier"
                value={this.state.reportIdentifier}
                onChange={this.onChange}
              />
              {errors.reportIdentifier && (
                <p className="invalid-feedback">{errors.reportIdentifier}</p>
              )}
            </div>

            <div className="form-group custom-border">
              <input
                className={classNames(
                  "form-control form-control-lg custom-form-control",
                  { "is-invalid": errors.reportdescription }
                )}
                type="text"
                placeholder="Report Description"
                name="reportdescription"
                value={this.state.reportdescription}
                onChange={this.onChange}
              />
              {errors.reportdescription && (
                <p className="invalid-feedback">{errors.reportdescription}</p>
              )}
            </div>

            <div className="form-group custom-border">
              <input
                className={classNames(
                  "form-control form-control-lg custom-form-control",
                  { "is-invalid": errors.batchName }
                )}
                type="text"
                placeholder="Batch Name"
                name="batchName"
                value={this.state.batchName}
                onChange={this.onChange}
              />
              {errors.batchName && (
                <p className="invalid-feedback">{errors.batchName}</p>
              )}
            </div>
            <div className="form-group custom-border">
              <input
                className={classNames(
                  "form-control form-control-lg custom-form-control",
                  { "is-invalid": errors.technologyName }
                )}
                type="text"
                placeholder="Technology Name"
                name="technologyName"
                value={this.state.technologyName}
                onChange={this.onChange}
              />
              {errors.technologyName && (
                <p className="invalid-feedback">{errors.technologyName}</p>
              )}
            </div>

            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
});

CreateReportComponent.propTypes = {
  errors: PropTypes.object.isRequired,
  createReport: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { createReport })(
  withRouter(CreateReportComponent)
);
