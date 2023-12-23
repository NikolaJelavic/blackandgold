
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="w-full bg-orange-900 flex py-5 px-1 h-20">
      <ul className="flex justify-between md:justify-around w-full">
        <Link
          to="/"
          className="text-stone-900 font-black hover:text-white text-lg"
        >
          Home
        </Link>

        <Link
          to="/aboutus"
          className="text-stone-900 font-black hover:text-white text-lg"
        >
          About us
        </Link>

        <Link
          to="/workshops"
          className="text-stone-900 font-black hover:text-white text-lg"
        >
          Workshops
        </Link>

        <Link
          to="/contact"
          className="text-stone-900 font-black hover:text-white text-lg"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
