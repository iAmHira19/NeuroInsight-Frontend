import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "This platform has revolutionized how we diagnose and monitor epilepsy cases. The accuracy is remarkable.",
    author: "Dr. Sarah Johnson",
    role: "Neurologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The early prediction system has helped us prevent numerous critical situations. It's a game-changer.",
    author: "Dr. Michael Chen",
    role: "Research Director",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "An invaluable tool for training new neurologists. The educational platform is comprehensive and intuitive.",
    author: "Dr. Emily Rodriguez",
    role: "Medical Educator",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Experts Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <Quote className="h-8 w-8 text-indigo-600 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}