import React from 'react';
import { Scissors } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Bienvenue sur CoiffureConnect</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Trouvez le coiffeur parfait et réservez votre rendez-vous en quelques clics.
      </p>
      <div className="w-32 h-32 mb-8 text-blue-500">
        <Scissors size={128} />
      </div>
      <a
        href="/booking"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Prendre rendez-vous
      </a>
    </div>
  );
};

export default Home;