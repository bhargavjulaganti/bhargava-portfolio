"use client";

import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ExperienceSection from './ExperienceSection';

export default function BhargavaPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'resume' | 'projects' | 'testimonials'>('resume');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">


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

          {/* About Me Section */}
          <section className="mt-20 flex flex-col items-start text-left w-full max-w-2xl mx-auto">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">About me</h2>
            <p className="text-lg text-gray-600 mb-2">
              Senior Quality Engineer with 7 years of experience in the Servicing Platform, specializing in technology implementation to enhance engineering and quality process. Started as a Quality Engineer (FOC), identifying gaps and automating processes for efficiency, leading to roles as Software Engineer and Senior Quality Engineer, driving innovation in engineering and testing spaces.
            </p>
          </section>

          {/* GitHub and LinkedIn Links */}
          <div className="flex flex-row gap-8 pt-8 mt-8 justify-center">
            <a
              href="https://github.com/bhargavjulaganti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-900 hover:text-blue-600 text-xl font-semibold transition-colors"
            >
              <img src="/github-mark.svg" alt="GitHub" className="w-8 h-8" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhargav-julaganti-61851016/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-900 hover:text-blue-600 text-xl font-semibold transition-colors"
            >
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
              LinkedIn
            </a>
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
          {activeTab === 'resume' && <ExperienceSection activeTab={activeTab} />}
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
