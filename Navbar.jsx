import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path) => {
    return location.pathname === path || location.hash.includes(path);
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScrollLink = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary-dark shadow-lg">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold">
          <i className="fas fa-shield-alt text-accent-red mr-2"></i>
          <span className="text-accent-yellow">
            <span className="text-accent-red">ResQ</span>Hub
          </span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-primary-dark md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 z-40 ${
            menuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md transition-all ${
                isActive('/') ? 'bg-[#2b2b4a] text-white' : 'text-gray-300 hover:bg-[#2b2b4a] hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href="/#disasters"
              onClick={(e) => { handleScrollLink(e, 'disasters'); setMenuOpen(false); }}
              className={`block px-3 py-2 rounded-md transition-all ${
                isActive('#disasters') ? 'bg-[#2b2b4a] text-white' : 'text-gray-300 hover:bg-[#2b2b4a] hover:text-white'
              }`}
            >
              Disasters
            </a>
          </li>
          <li>
            <a
              href="/#shelters"
              onClick={(e) => { handleScrollLink(e, 'shelters'); setMenuOpen(false); }}
              className={`block px-3 py-2 rounded-md transition-all ${
                isActive('#shelters') ? 'bg-[#2b2b4a] text-white' : 'text-gray-300 hover:bg-[#2b2b4a] hover:text-white'
              }`}
            >
              Shelters
            </a>
          </li>
          <li>
            <Link
              to="/kits"
              className={`block px-3 py-2 rounded-md transition-all ${
                isActive('/kits') ? 'bg-[#2b2b4a] text-white' : 'text-gray-300 hover:bg-[#2b2b4a] hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Emergency Kits
            </Link>
          </li>
          <li>
            <Link
              to="/donation"
              className={`block px-3 py-2 rounded-md transition-all ${
                isActive('/donation') ? 'bg-[#2b2b4a] text-white' : 'text-gray-300 hover:bg-[#2b2b4a] hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Donation
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className={`block px-3 py-2 rounded-md transition-all ${
                isActive('/resources') ? 'bg-[#2b2b4a] text-white' : 'text-gray-300 hover:bg-[#2b2b4a] hover:text-white'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </Link>
          </li>
        </ul>

        {/* Emergency Button */}
        <a
          href="tel:112"
          className="hidden md:inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-all"
        >
          <i className="fas fa-phone-alt mr-2"></i>
          Emergency
        </a>
      </div>
      {/* Emergency Button for mobile */}
      <div className="md:hidden px-4 pb-2 flex justify-end">
        <a
          href="tel:112"
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-all"
        >
          <i className="fas fa-phone-alt mr-2"></i>
          Emergency
        </a>
      </div>

    </nav>
  );
};

export default Navbar;