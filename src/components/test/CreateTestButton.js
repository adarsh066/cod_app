import React from "react";
import { Link } from "react-router-dom";
import "./CreateTestButton.css";
const CreatTestButton = () => {
  return (
    <Link to="/addTest" className="create-test-button">
      Create Test
    </Link>
  );
};
export default CreatTestButton;
