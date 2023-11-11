import { useState } from "react";
import "./App.css";
import companiesJson from "./companies.json";
import technologiesJson from "./technologies.json";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CompanyPage from "./pages/Company/CompanyPage";
import TechnologyPage from "./pages/Technology/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJson);
  const [technologies, setTechnologies] = useState(technologiesJson);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path="/tech/:techSlug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </>
  );
}

export default App;
