import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Coaches() {
  const coaches = [
    {
      name: "Sarah Chen",
      role: "Algorithm Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500",
      company: "Ex-Google",
    },
    {
      name: "Michael Rodriguez",
      role: "Competitive Programming Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500",
      company: "Ex-Facebook",
    },
    {
      name: "David Kim",
      role: "System Design Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500",
      company: "Ex-Amazon",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % coaches.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + coaches.length) % coaches.length);
  };

  return (
    <div id="coaches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Expert Coaches</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button 
              onClick={prev}
              className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coaches.map((coach, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                    index === currentIndex ? 'scale-105' : 'scale-95 opacity-75'
                  }`}
                >
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{coach.name}</h3>
                  <p className="text-gray-600 text-center mb-2">{coach.role}</p>
                  <p className="text-yellow-500 text-center font-medium">{coach.company}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={next}
              className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}