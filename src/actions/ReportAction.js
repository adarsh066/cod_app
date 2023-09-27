import axios from "axios";
import {
  DELETE_REPORT,
  GET_ERRORS,
  GET_REPORT,
  GET_REPORTS,
} from "./ReportTypes";

export const createReport = (report, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/reports", report);
    navigate("/Reportlist");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getReports = () => async (dispatch) => {
  const res = await axios.get("/api/reports/all");

  dispatch({
    type: GET_REPORTS,
    payload: res.data,
  });
};

export const deleteReport = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and the deta releted to it."
    )
  ) {
    const res = await axios.delete(`/api/reports/${id}`);
    dispatch({
      type: DELETE_REPORT,
      payload: id,
    });
  }
};

export const getReport = (id) => async (dispatch) => {
  const res = await axios.get(`/api/reports/${id}`);
  dispatch({
    type: GET_REPORT,
    payload: res.data,
  });
};
