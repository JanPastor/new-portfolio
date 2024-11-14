'use client';

import Navigation from '@/components/Navigation';

export default function Home() {
  const programmingLanguages = [
    'Python',
    'C/C++',
    'C#',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript',
    'Verilog',
    'LaTeX'
  ];

  const softwareTools = [
    'Visual Studio/Visual Studio Code 2022',
    'Jetbrains Webstorm IDE',
    'VCS: GitHub and Git Bash',
    'Jupyter Notebook',
    'Overleaf',
    'Arduino',
    'Docker',
    'WSL (Windows Subsystem for Linux)',
    'SOLIDWORKS',
    'MATLAB & Simulink',
    'KiCAD',
    'LTSpice',
    'OrCAD/Pspice',
    'Altium PCB Designer'
  ];

  const electricalSkills = [
    'Intermediate knowledge of circuit analysis',
    'Intermediate knowledge of digital logic design',
    'Intermediate knowledge of digital signal processing',
    'Electrical wiring and electrical safety',
    'Basic knowledge of motors and generators',
    'Basic knowledge in PLC programming and electrical troubleshooting'
  ];

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-[#001220] to-[#001830]">
      <Navigation />
      <div className="ml-64 p-8 relative">
        <section className="max-w-6xl mx-auto space-y-12">
          {/* Header Section */}
          <header className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white flex items-center justify-center gap-2">
              Hi <span className="wave-hand">👋</span> I'm Jan Pastor!
            </h1>
            <p className="text-xl text-white/80">
              Electrical Engineer | Computer Engineer
            </p>
          </header>

          {/* Main Content */}
          <section className="space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span>⚡</span> I am an Electrical and Computer Engineering Major! <span>🔋</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Electricity has always fascinated me. I seek to understand more about electrical theory
                and electronics and maybe invent a few gizmos and gadgets before I croak!
              </p>
            </div>

            {/* Current Status */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Where I am now
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I am an aspiring Electrical and Computer Engineer from California, currently a second-year transfer student at Cal Poly Pomona.
                I am pursuing dual B.S. degrees in Electrical Engineering and Computer Engineering.
                I am actively seeking internships and research opportunities for the summer of 2024/2025.
                Additionally, I am looking for opportunities to collaborate with other engineers and programmers on innovative projects.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Skills
              </h3>

              {/* Programming Languages */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Tools */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Software Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softwareTools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Electrical Skills */}
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Electrical and Electronics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {electricalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
