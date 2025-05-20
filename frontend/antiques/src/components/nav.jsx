import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="bg-yellow-100 shadow mb-8">
    <div className="container mx-auto px-4 py-3 flex justify-center gap-8">
      <Link
        to="/"
        className="text-yellow-900 font-semibold hover:text-yellow-700 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        to="/antiques"
        className="text-yellow-900 font-semibold hover:text-yellow-700 transition-colors duration-200"
      >
        All Products
      </Link>
      <Link
        to="/add"
        className="text-yellow-900 font-semibold hover:text-yellow-700 transition-colors duration-200"
      >
        Add Antique
      </Link>
    </div>
  </nav>
);

export default Nav;