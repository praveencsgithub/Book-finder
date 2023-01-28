import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <header>
      <nav className="container mx-auto flex  max-w-5xl flex-wrap items-center justify-between gap-8 px-6 py-4">
      <NavLink to="/" className="flex items-center gap-4">
          <img className="h-[50px]" src={logo} alt="brand logo" />
          
          <h1 className="font-mono text-2xl font-bold tracking-widest text-gray-900">
            BookFinder
          </h1>
          
        </NavLink>
        <form
          method="get"
          className="flex items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-lg bg-inherit py-2 px-3 ring-2 ring-teal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-900"
            type="search" placeholder="find your book..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Search
          
          </button>
        </form>
      </nav>
      
    </header>
  
  );
}

export default Nav;
