import React from 'react';

interface ExperienceProps {
  activeTab: 'resume' | 'projects' | 'testimonials';
}

export default function ExperienceSection({ activeTab }: ExperienceProps) {
  if (activeTab !== 'resume') return null;
  return (
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
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                <li>
                  Led an automation team to develop end-to-end UI regression tests for Barnes & Noble using Selenium and Cucumber, ensuring robust coverage and faster release cycles.
                </li>
                <li>
                  Helped the team replicate and resolve complex production performance issues in lower environments, improving system reliability.
                </li>
                <li>
                  Created detailed test estimations and project plans, enabling efficient resource allocation and on-time delivery of automation projects.
                </li>
              </ul>
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
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                <li>
                  Led the development of an automation framework using Coded UI for point-of-sale systems, reducing testing time by 60% (from 5 days to 2 days) and improving efficiency.
                </li>
                <li>
                  Assisted multiple teams in setting up their initial automated tests for WPF applications
                </li>
              </ul>
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
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                <li>
                  Involved in creating end-to-end regression tests using HP UFT & Selenium.
                </li>
                <li>
                  Led teams in offshore onsite model in delivering regression automation for multiple projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
