import React from 'react';
import { Check } from 'lucide-react';

export default function Registration() {
  return (
    <div id="registration" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Register Now</h2>
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-yellow-500 p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <p className="text-xl">$499</p>
          </div>
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {[
                "Access to all bootcamp sessions",
                "1-on-1 mentoring with experts",
                "Competition entry ticket",
                "Exclusive study materials",
                "Certificate of completion",
                "Job referral opportunities",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}