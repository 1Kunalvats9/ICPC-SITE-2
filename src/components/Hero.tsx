import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-yellow-50 via-yellow-100 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Go For Gold <span className="text-yellow-500">Coding</span> Championship
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join the world's most prestigious coding competition and transform your programming career with expert mentorship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition flex items-center">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-50 transition">
                View Schedule
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              alt="Coding Competition"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-yellow-500">March 15-17</p>
              <p className="text-gray-600">2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}