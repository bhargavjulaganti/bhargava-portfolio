"use client";

import React from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function BhargavaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">BJ</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Work</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Work</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Bhargava
                <br />
                Julaganti
              </h1>
              <p className="text-xl text-gray-600 mt-4">Senior Quality Engineer</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Transforming data into the graphical interface & layouts schema for all types of applications.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>

            {/* Skills or Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">13+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            {/* <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Bhargava Julaganti - Senior Quality Engineer"
                className="w-full h-96 lg:h-[500px] object-cover"
              /> */}
              
              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div> */}

            {/* Floating elements */}
            {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">UI</span>
            </div> */}
            
            {/* <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">UX</span>
            </div> */}
          </div>
        </div>

        {/* Resume Section */}
        <section className="mt-24">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-full p-2">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium transition-colors">
                Resume
              </button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-900 rounded-full font-medium transition-colors">
                Projects
              </button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-900 rounded-full font-medium transition-colors">
                Testimonials
              </button>
            </div>
          </div>

          {/* Experience Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
            
            <div className="space-y-12">
              {/* Typedream */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <p className="text-gray-600 font-medium">Jun 2022 - Present</p>
                </div>
                <div className="lg:col-span-9">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Typedream</h3>
                      <p className="text-blue-500 font-medium">Senior Developer</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Designed and implemented SEO strategies for user acquisition, driving 
                      acquisition up by an average of 250% each month.
                    </p>
                  </div>
                </div>
              </div>

              {/* Github */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <p className="text-gray-600 font-medium">Oct 2021 - May 2022</p>
                </div>
                <div className="lg:col-span-9">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Github</h3>
                      <p className="text-blue-500 font-medium">Intermediate Developer</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Create a more efficient bug handler to avoid excessive errors when git commits fail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Microsoft */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <p className="text-gray-600 font-medium">Jan 2020 - Sep 2021</p>
                </div>
                <div className="lg:col-span-9">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Microsoft</h3>
                      <p className="text-blue-500 font-medium">Junior Developer</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Assist in designing the latest application display structure for Microsoft Teams. 
                      There I was assigned to implement the design into real apps for online class features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Lets Work Together</h3>
              <p className="text-gray-400 mb-6">Ready to bring your next project to life? Id love to hear from you.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get In Touch new
              </button>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bhargava Julaganti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
