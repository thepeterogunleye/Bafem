import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold">
            <a href="/">Bafem Solar</a>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link><a href="/" className="link link-hover">Home</a></Link>
            </li>
            <li>
              <Link><a href="/about" className="link link-hover">About</a></Link>
            </li>
            <li>
            <Link><a href="/portfolio" className="link link-hover">Portfolio</a></Link>
            </li>
            <li>
            <Link><a href="/contact" className="link link-hover">Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
