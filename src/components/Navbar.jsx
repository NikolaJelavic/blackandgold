
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="w-full bg-black flex py-5 px-1 h-20">
      <ul className="flex justify-around md:justify-around w-full">
        <Link
          to="/"
          className="text-amber-300 font-black hover:text-amber-400 text-xl"
        >
          Home
        </Link>

        <Link
          to="/uebermich"
          className="text-amber-300 font-black hover:text-amber-400 text-xl"
        >
          Über mich
        </Link>

        {/* <Link
          to="/workshops"
          className="text-white font-black hover:text-slate-400 text-lg"
        >
          Workshops
        </Link> */}

        <Link
          to="/kontakt"
          className="text-amber-300 font-black hover:text-amber-400 text-xl"
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
}
