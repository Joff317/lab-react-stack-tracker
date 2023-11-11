import { useParams } from "react-router-dom";
import "../Company/company.css";
import { useNavigate } from "react-router-dom";
function TechnologyPage({ technologies }) {
  const params = useParams();
  const techToDisplay = technologies.find(
    (tech) => tech.name === params.techSlug
  );

  let navigate = useNavigate();
  return (
    <div className="company">
      <h1>Tech Profile</h1>

      <div className="big-container">
        <div className="left-container">
          <img className="comp-logo" src={techToDisplay.image} alt="" />
        </div>
        <div className="right-container">
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            {techToDisplay.name}
          </p>
          <p className="about">About</p>
          <p>{techToDisplay.description}</p>
        </div>
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default TechnologyPage;
