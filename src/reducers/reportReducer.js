import { DELETE_REPORT, GET_REPORT, GET_REPORTS } from "../actions/ReportTypes";

const initialState = {
  reports: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REPORTS:
      return {
        ...state,
        reports: action.payload,
      };
    case GET_REPORT:
      return {
        ...state,
        report: action.payload,
      };
    case DELETE_REPORT:
      return {
        ...state,
        reports: state.reports.filter(
          (report) => report.reportIdentifier != action.payload
        ),
      };
    default:
      return state;
  }
}
