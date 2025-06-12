import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our platform? We're here to help. Contact us for more information or to schedule a demo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                <span>hiraamanatali19@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                <span>+92 326 96-64645</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                <span>UET Lahore (Main Campus) , Suite 54890</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}