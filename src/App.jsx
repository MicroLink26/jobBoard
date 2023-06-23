import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import Footer from "./components/Footer/Footer";

import "./App.css";

const jobs = [
  {
    className: "red",
    title: "Full Time Sales Associate - Sydney Boutique",
    contractType: "CDI",
    country: "Australie",
    city: "Sydney",
  },
  {
    className: "green",
    title: "Agent de sécurité - Pantin",
    contractType: "CDI",
    country: "France",
    city: "Pantin",
  },
  {
    className: "yellow",
    title: "Responsable d'atelier (H/F)",
    contractType: "CDD",
    country: "France",
    city: "Paris",
  },
  {
    className: "blue",
    title: "Chef de projet",
    contractType: "CDD",
    country: "France",
    city: "Paris",
  },
  {
    className: "salmon",
    title: "Développeur React.js",
    contractType: "CDI",
    country: "France",
    city: "Paris",
  },
  {
    className: "red",
    title: "Sales Associate Stockholm",
    contractType: "CDI",
    country: "Suède",
    city: "Stockholm",
  },
  {
    className: "green",
    title: "Vendeur/se - Crans Montana",
    contractType: "CDI",
    country: "Suisse",
    city: "Crans-Montana",
  },
  {
    className: "yellow",
    title: "CRM & Data Quality Analyst",
    contractType: "CDI",
    country: "USA",
    city: "New-York",
  },
  {
    className: "blue",
    title: "Infirmier (H/F)",
    contractType: "CDI",
    country: "France",
    city: "Pantin",
  },
];
function App() {
  return (
    <>
      <Header text="The Job Board" />
      <Jobs jobs={jobs} />
      <Footer text="Made with React at Le Reacteur By Mike" />
    </>
  );
}

export default App;
