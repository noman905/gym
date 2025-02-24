import React from 'react';
import { useNavigate } from 'react-router-dom';

 const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-6">
      <h1 className="text-8xl font-bold text-lime-400">404</h1>
      <p className="text-lg mt-4">Oops! The page you are looking for doesn't exist.</p>
      <div className="mt-6 flex space-x-4">
        <button 
          onClick={() => navigate(-1)} 
          className="px-6 py-3 bg-lime-400 text-black font-bold rounded-lg hover:bg-green-600">
          Previous Page
        </button>
        <button 
          onClick={() => navigate('/')} 
          className="px-6 py-3 bg-lime-400 text-black font-bold rounded-lg hover:bg-green-600">
          Home Page
        </button>
      </div>
    </div>
  );
};

export default Errorpage