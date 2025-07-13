"use client";

import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function BhargavaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'resume' | 'projects' | 'testimonials'>('resume');

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
        <div className="flex flex-col items-center text-center">
          {/* Name, Title, Resume Link */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight whitespace-nowrap">
            Bhargava Julaganti
          </h1>
          <p className="text-xl text-gray-600 mt-4">Senior Quality Engineer</p>
          <a
            href="/resume.pdf"
            className="text-blue-600 font-semibold text-lg hover:underline flex items-center gap-1 justify-center mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume <Download size={18} className="ml-1" />
          </a>
          {/* Skills or Stats */}
          <div className="grid grid-cols-2 gap-8 pt-8 mt-8">
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

        {/* Resume Section */}
        <section className="mt-24">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 gap-8">
            <button
              className={`px-16 py-8 rounded-2xl font-bold text-2xl shadow-xl focus:outline-none transition-colors ${activeTab === 'resume' ? 'bg-blue-400 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => setActiveTab('resume')}
            >
              Resume
            </button>
            <button
              className={`px-16 py-8 rounded-2xl font-bold text-2xl shadow-xl focus:outline-none transition-colors ${activeTab === 'projects' ? 'bg-blue-400 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`px-16 py-8 rounded-2xl font-bold text-2xl shadow-xl focus:outline-none transition-colors ${activeTab === 'testimonials' ? 'bg-blue-400 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => setActiveTab('testimonials')}
            >
              Testimonials
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'resume' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
              <div className="space-y-12">
                {/* Barnes & Noble */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3">
                    <p className="text-gray-600 font-medium">Sep 2017 – Mar 2018</p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Barnes & Noble</h3>
                        <p className="text-blue-500 font-medium">Lead Automation Engineer</p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        "Led an automation team to develop end-to-end UI regression tests for Barnes & Noble using Selenium and Cucumber.",
                        "Helped the team replicate production performance issues in lower environments.",
                        "Worked on creating Test estimations for the automation projects"
                      </p>
                    </div>
                  </div>
                </div>
                {/* Meijer */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3">
                    <p className="text-gray-600 font-medium">June 2016 – Sep 2017</p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Meijer</h3>
                        <p className="text-blue-500 font-medium">Lead Automation Engineer</p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        "Led the development of an automation framework using Coded UI for point-of-sale systems, reducing testing time by 60% (from 5 days to 2 days) and improving efficiency.",
                        "Assisted multiple teams in setting up their initial automated tests for WPF applications",
                      </p>
                    </div>
                  </div>
                </div>
                {/* Target */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3">
                    <p className="text-gray-600 font-medium">Jan 2015 – June 2016</p>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Target</h3>
                        <p className="text-blue-500 font-medium">QA Automation Lead & Tester</p>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        "Involved in creating end-to-end regression tests using HP UFT & Selenium.",
                        "Led teams in offshore onsite model in delivering regression automation for multiple projects."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'projects' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Website</h3>
                  <p className="text-gray-600">A personal portfolio built with Next.js and Tailwind CSS, deployed on Firebase Hosting.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">E-commerce Automation</h3>
                  <p className="text-gray-600">Developed automation frameworks for e-commerce platforms to streamline testing and deployment.</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'testimonials' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Testimonials</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow p-8">
                  <p className="text-gray-600 italic">“Bhargava is a detail-oriented engineer who always delivers high-quality work on time.”</p>
                  <p className="text-gray-900 font-bold mt-4">— Project Manager, Meijer</p>
                </div>
                <div className="bg-white rounded-xl shadow p-8">
                  <p className="text-gray-600 italic">“A true leader in automation and quality engineering.”</p>
                  <p className="text-gray-900 font-bold mt-4">— QA Lead, Target</p>
                </div>
              </div>
            </div>
          )}
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
