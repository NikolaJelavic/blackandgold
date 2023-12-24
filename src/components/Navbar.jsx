
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="w-full bg-black flex py-5 px-1 h-20">
      <ul className="flex justify-between md:justify-around w-full">
        <Link
          to="/"
          className="text-white font-black hover:text-slate-400 text-lg"
        >
          Home
        </Link>

        <Link
          to="/aboutus"
          className="text-white font-black hover:text-slate-400 text-lg"
        >
          About us
        </Link>

        <Link
          to="/workshops"
          className="text-white font-black hover:text-slate-400 text-lg"
        >
          Workshops
        </Link>

        <Link
          to="/contact"
          className="text-white font-black hover:text-slate-400 text-lg"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
