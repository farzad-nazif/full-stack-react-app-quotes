import { Link, Route, Routes } from "react-router-dom";
import AllQoutes from "./AllQoutes";
import "./App.css";
import Home from "./Home";
import SearchAuthors from "./SearchAuthors";
import SearchQoutes from "./SearchQoutes";
import Footer from "./Footer";
import RandomQuote from "./RandomQuote";

function App() {
  return (
    <>
      <nav id="navbar">
        <Link to={"/"} className="navitems">
          Home
        </Link>
        <Link to={"/allqoutes"} className="navitems">
          All Qoutes
        </Link>
        <Link to={"/searchqoutes"} className="navitems">
          Search Qoutes
        </Link>
        <Link to={"/searchauthors"} className="navitems">
          Search Authors
        </Link>
        <Link to={"/randomquote"} className="navitems">
          Random Quote
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allqoutes" element={<AllQoutes />} />
        <Route path="/searchqoutes" element={<SearchQoutes />} />
        <Route path="/searchauthors" element={<SearchAuthors />} />
        <Route path="/randomquote" element={<RandomQuote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
