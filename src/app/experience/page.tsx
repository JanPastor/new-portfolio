'use client';

import RainEffect from '@/components/RainEffect';
import Navigation from '@/components/Navigation';

export default function Experience() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
            <Navigation />
            {/* Background Animation */}
            <RainEffect />
            
            {/* Main Content */}
            <div className="transition-all duration-300 ml-16 hover:ml-64 p-8">
                <section className="max-w-7xl mx-auto space-y-12">
                    <h1 className="text-4xl font-bold text-white flex items-center gap-2">
                        <span>🪪</span> Experience <span>🧰</span>
                    </h1>
                    
                    {/* Experience Timeline */}
                    <div className="space-y-8">
                        {/* MATE ROV Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                                🌊 MATE ROV Spring 2023 World Competition | Pasadena City College 🌀
                            </h2>
                            <h3 className="text-xl text-blue-300 mb-4">
                                👨‍💻 Lead Software Engineer | 👨‍🏭 Electrical Engineer
                            </h3>
                            <ul className="list-disc list-inside text-gray-200 space-y-2">
                                <li>Designed, implemented, and managed all software related aspects of the Remotely Operated Vehicle (ROV)</li>
                                <li>Implemented code to operate a gripper mechanism for the ROV (servo-operated claw), designed intuitive GUI for Pilot, wrote code to operate dual camera system</li>
                                <li>Employed custom computer vision algorithms and pre-trained AI models to enhance ROV capabilities</li>
                                <li>Tested and debugged ROV system code to eliminate fatal errors and crashes during ROV operation</li>
                                <li>Soldered and assembled all electronic components and systems for the ROV</li>
                                <li>Assisted electrical engineers in building PSU (power supply unit) for ROV</li>
                                <li>Performed extensive electrical wiring safety inspections on the ROV</li>
                                <li>Collaborated closely with Team CEO and Team Leads to ensure ROV was competition ready</li>
                            </ul>
                        </div>

                        {/* MATE FLOATS Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                                ⚓ MATE FLOATS Summer 2023 Training Workshop | Pasadena City College ⛵
                            </h2>
                            <h3 className="text-xl text-blue-300 mb-4">
                                📊 Data Analytics Cohort Member
                            </h3>
                            <ul className="list-disc list-inside text-gray-200 space-y-2">
                                <li>Organized and conducted data analysis of oceanographic data using Jupyter notebook, Python, and MATLAB</li>
                                <li>Conducted basic laboratory sample collection, chemical analysis, and testing</li>
                                <li>Collaborated with a cadre of engineers to build and program custom sensors to collect oceanographic data</li>
                                <li>Boarded Rachel-Carson Research vessel and assisted chief scientist in deployment of oceanographic instrumentation using FLOAT, Rosetta, and Glider technology</li>
                            </ul>
                        </div>

                        {/* Bronco Space BLADE Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                                🛰 Fall 2023-Spring 2024 Cal Poly Pomona Bronco Space BLADE 🚀
                            </h2>
                            <h3 className="text-xl text-blue-300 mb-4">
                                🧑‍💼 Team Deputy | 🔬 Lead Researcher | 🖥 Electronic Schematics Drafter
                            </h3>
                            <ul className="list-disc list-inside text-gray-200 space-y-2">
                                <li>Scheduled and conducted weekly team meetings to discuss project progress and goals</li>
                                <li>Assisted Team Lead in managing team members and delegating tasks</li>
                                <li>Conducted research on Balloon Radio Occultation (RO) technology and its applications</li>
                                <li>Managed finances and budget for the project</li>
                                <li>Drafted electronic schematics for the BRO payload</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
