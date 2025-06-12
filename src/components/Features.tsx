import React from 'react';
import { Brain, Clock, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Real-Time EEG Analysis',
    description: 'Advanced processing of EEG data for immediate seizure pattern detection and analysis.'
  },
  {
    icon: Clock,
    title: 'Early Prediction',
    description: 'AI-powered seizure forecasting system for proactive patient care management.'
  },
  {
    icon: BookOpen,
    title: 'Educational Platform',
    description: 'Interactive learning tools for healthcare professionals to enhance diagnostic skills.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-lg transition">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}