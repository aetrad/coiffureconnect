import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-800 hover:text-gray-700">
            <Scissors className="h-8 w-8 mr-2" />
            <span className="text-xl font-semibold">CoiffureConnect</span>
          </Link>
          <div className="flex items-center">
            <Link to="/client" className="text-gray-800 hover:text-gray-700 mx-3">Client</Link>
            <Link to="/hairdresser" className="text-gray-800 hover:text-gray-700 mx-3">Coiffeur</Link>
            <Link to="/booking" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
              Prendre RDV
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;