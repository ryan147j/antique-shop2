import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative home flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-yellow-50 to-white overflow-hidden">
   
      <img
        src="https://www.behindthescenesnyc.com/wp-content/uploads/2018/09/Shop-Home-and-Kids-Olde-Good-Things-Vintage-Items.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0"
        style={{ filter: 'blur(2px)' }}
      />
     
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6 mt-8 text-center drop-shadow">
          Welcome to the Antiques Store
        </h1>
        <div className="flex flex-row items-center justify-center w-full max-w-3xl mb-6 gap-6">
          <img
            src="https://www.thesprucecrafts.com/thmb/FlEpm6b2vMixwZJ-aZ-rtxLZdKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flea-market-168331770-5c2c05be46e0fb0001206d51.jpg"
            className="rounded-lg shadow-lg w-full max-w-md h-64 object-cover"
          />
          <div className="w-full max-w-md h-64 flex items-center justify-center bg-yellow-50 rounded-lg border-2 border-dashed border-yellow-200">
            <img
              src="https://img.freepik.com/free-photo/view-vintage-objects-still-life_23-2150348530.jpg?ga=GA1.1.1210225873.1747733079&semt=ais_hybrid&w=740"
              className="rounded-lg shadow-lg w-full max-w-md h-64 object-cover"
            />
          </div>
          <div></div>
        </div>
        <button
          onClick={() => navigate('/antiques')}
          className="mb-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
        >
          Explore Products
        </button>
        <p className="text-lg text-yellow-800 text-center max-w-xl">
          Discover unique antiques from around the world. Browse our collection and find your next treasure!
        </p>
      </div>
    </div>
  );
}