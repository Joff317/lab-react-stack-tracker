import { Link, Outlet, useParams } from "react-router-dom";
import "./HomePage.css";
function HomePage({ companies }) {
  console.log(companies);
  return (
    <div className="home">
      <h1>State Trakcer: Discover Tech used by Top companies</h1>

      <div className="company-container">
        {companies.map((company) => (
          <Link key={company.id} to={`/company/${company.name}`}>
            <div className="card-company">
              <p className="company-title">{company.name} </p>

              <img className="company-logo" src={company.logo} alt="" />
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default HomePage;
