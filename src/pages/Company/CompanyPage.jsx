import { Link, useParams } from "react-router-dom";
import "./company.css";
function CompanyPage({ companies }) {
  const params = useParams();
  const companiesToDisplay = companies.find(
    (company) => company.name === params.companySlug
  );

  const techs = companiesToDisplay.techStack;
  console.log(techs);
  return (
    <div className="company">
      <h1>Company Profile</h1>

      <div className="big-container">
        <div className="left-container">
          <img className="comp-logo" src={companiesToDisplay.logo} alt="" />
        </div>
        <div className="right-container">
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>
            {companiesToDisplay.name}
          </p>
          <p className="about">About</p>
          <p>{companiesToDisplay.description}</p>
        </div>
      </div>

      <div className="card-tech-container">
        {techs.map((tech, index) => (
          <Link key={index} to={`/tech/${tech.name}`}>
            <div className="card-tech">
              <div className="img-container">
                <img className="tech-img" src={tech.image} alt="" />
              </div>
              <p>{tech.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
