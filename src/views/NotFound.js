import { useHistory } from "react-router-dom";
const NotFound = () => {
  let history = useHistory();
  const handleClickButton = () => {
    history.push("/");
  };
  return (
    <div className="not-found-container">
      <h3>This Page isn't Available</h3>
      <h5>the link is broken , Please re-check </h5>
      <button className="btn btn-primary" onClick={handleClickButton}>
        Go to Home Page
      </button>
    </div>
  );
};
export default NotFound;
