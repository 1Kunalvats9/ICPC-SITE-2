import React from 'react';

export default function About() {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="About Go For Gold"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Go For Gold</h2>
            <p className="text-lg text-gray-600 mb-6">
              Go For Gold is more than just a coding competition - it's a platform where exceptional talent meets opportunity. 
              Our mission is to identify and nurture the next generation of coding champions through rigorous competition and 
              expert mentorship.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">5000+</h4>
                <p className="text-gray-600">Global Participants</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">100+</h4>
                <p className="text-gray-600">Countries Represented</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">50+</h4>
                <p className="text-gray-600">Expert Coaches</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl text-yellow-500 mb-2">95%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}