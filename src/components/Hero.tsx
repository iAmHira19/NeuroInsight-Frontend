import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Brain, AlertTriangle } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Epilepsy Detection Through AI
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Revolutionizing epilepsy diagnosis with real-time EEG analysis and early seizure prediction using advanced deep learning techniques.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
              alt="Medical Analysis"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Activity className="text-green-500 h-5 w-5" />
                <span className="text-sm font-medium">Real-time Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}