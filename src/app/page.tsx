import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">This is a simple starting page to test your Next.js setup.</p>
        <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HomePage;
