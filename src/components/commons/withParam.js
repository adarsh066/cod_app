import { useNavigate, useParams } from "react-router-dom";

const withParam = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <WrappedComponent {...props} {...{ params, navigate }} />;
};

export default withParam;
