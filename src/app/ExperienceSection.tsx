import React from 'react';
import experienceData from '../data/experienceData.json';

interface ExperienceProps {
  activeTab: 'resume' | 'projects' | 'testimonials' | 'certifications';
}

export default function ExperienceSection({ activeTab }: ExperienceProps) {
  if (activeTab !== 'resume') return null;
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
      <div className="space-y-12">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-gray-600 font-medium">{exp.date}</p>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-blue-500 font-medium">{exp.role}</p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}