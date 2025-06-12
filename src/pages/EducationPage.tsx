import React from 'react';
import { BookOpen, Video, FileText, Users } from 'lucide-react';

const resources = [
  {
    title: 'Understanding EEG Patterns',
    type: 'Video Course',
    duration: '2 hours',
    level: 'Intermediate',
    icon: Video,
  },
  {
    title: 'Epilepsy Detection Guide',
    type: 'Documentation',
    duration: '1 hour',
    level: 'Beginner',
    icon: FileText,
  },
  {
    title: 'Advanced Analysis Techniques',
    type: 'Workshop',
    duration: '3 hours',
    level: 'Advanced',
    icon: Users,
  },
];

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Educational Resources</h2>

        <div className="grid gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <resource.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">{resource.type}</span>
                    <span className="mr-4">•</span>
                    <span className="mr-4">{resource.duration}</span>
                    <span className="mr-4">•</span>
                    <span>{resource.level}</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Latest Updates</h3>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <BookOpen className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-600">New course on Machine Learning in EEG Analysis added</span>
                <span className="ml-auto text-gray-400">2 days ago</span>
              </div>
              <div className="flex items-center text-sm">
                <Video className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-600">Updated video content for Seizure Pattern Recognition</span>
                <span className="ml-auto text-gray-400">1 week ago</span>
              </div>
              <div className="flex items-center text-sm">
                <FileText className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-600">New research paper on AI in Epilepsy Detection</span>
                <span className="ml-auto text-gray-400">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}