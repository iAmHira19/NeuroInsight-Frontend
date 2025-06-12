import React from 'react';
import { Users, Brain, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Neuro Insight</h1>
          <p className="text-xl text-gray-600">
            Revolutionizing epilepsy diagnosis through artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We're dedicated to improving epilepsy diagnosis and management through
              innovative AI solutions. Our platform combines cutting-edge technology
              with medical expertise to provide accurate, real-time analysis of EEG data.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To create a world where epilepsy diagnosis is faster, more accurate,
              and accessible to healthcare providers everywhere, ultimately improving
              patient outcomes and quality of life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">10,000+</h3>
            <p className="text-gray-600">Patients Helped</p>
          </div>
          <div className="text-center">
            <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">95%</h3>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">15+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center">
            <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">20+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Hira Amanat',
                role: 'Team Lead',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Dr. Irfan Yousuf',
                role: 'Assiciate Professor , Supervisor',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Areej Ghulam Nabi',
                role: 'Co-Lead',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}