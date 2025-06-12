import React from 'react';
import { Users, Brain, Activity, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Patients Analyzed'
  },
  {
    icon: Brain,
    value: '95%',
    label: 'Accuracy Rate'
  },
  {
    icon: Activity,
    value: '24/7',
    label: 'Monitoring'
  },
  {
    icon: Clock,
    value: '< 1min',
    label: 'Analysis Time'
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 opacity-75" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-75">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}