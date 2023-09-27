import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
const CreateReportButton = () => {
  return (
    <Link to="/Reportlist" className="create-test-button">
      Create
    </Link>
  );
};

export default CreateReportButton;
