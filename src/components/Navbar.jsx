import { NavLink } from "react-router-dom";

function Navbar() {
  const total = 200;
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Power Hack</span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p className="mr-5">Paid Total: {total} </p>
          </nav>
          <NavLink to="/login" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Login
          </NavLink>
        </div>
      </header>
  )
}

export default Navbar