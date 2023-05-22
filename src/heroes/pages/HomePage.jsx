import { Link } from "react-router-dom";
import "./HomePage.css"

export const HomePage = () => {
  return (
    <div className="container">
      <div className="row text-center py-4">
        <h1>Which publisher are you interested in?</h1>
      </div>
      <div className="row row-cols-sm-1 row-cols-md-2 text-center">
        <Link to="/marvel">
          <h2>Marvel</h2>
          <img
            className="img-thumbnail"
            src="/heroes-publisher/marvel.jpg"
            alt="marvel heroes"
          />
        </Link>

        <Link to="/dc">
          <h2>DC</h2>
          <img
            className="img-thumbnail"
            src="/heroes-publisher/dc.jpg"
            alt="dc heroes"
          />
        </Link>
      </div>
    </div>
  );
};
