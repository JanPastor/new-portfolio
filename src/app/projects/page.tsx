'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ImageModal from '@/components/ImageModal';
import { getAssetPath } from '@/utils/assetPath';
import '../animations/hue-shift.css';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = [
    {
      title: 'AI Web Scraper Project',
      description: 'Using Selenium and Ollama to scrape data from websites',
      longDescription: 'A sophisticated web scraping tool that combines the power of Selenium for automated browsing and Ollama for AI-powered data extraction.',
      technologies: ['Python', 'Selenium', 'Ollama', 'Streamlit'],
      images: [
        {
          src: getAssetPath('/images/project_images/ai_scraper1.png'),
          alt: 'AI Web Scraper Interface'
        },
        {
          src: getAssetPath('/images/project_images/ai_scraper2.png'),
          alt: 'AI Web Scraper Interface'
        },
        {
          src: getAssetPath('/images/project_images/txt_batch1_result.png'),
          alt: 'AI Web Scraper Results'
        }
      ],
      video: {
        src: getAssetPath('/videos/AI_ScraperDemo.mp4'),
        alt: 'AI Web Scraper Demo',
        thumbnail: getAssetPath('/images/project_images/ai_scraper1.png')
      },
      link: 'https://github.com/JanPastor/AI-Web-Scraper'
    }
  ];

  return (
    <main className="min-h-screen hue-shift-bg">
      <Navigation />
      
      <div className="transition-all duration-300 ml-16 hover:ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 flex items-center gap-2">
            <span>🚀</span> Projects <span>💻</span>
          </h1>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">{project.title}</h2>
                <p className="text-gray-200 mb-4">{project.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Media Section */}
                <div className="space-y-6">
                  {/* Video Player */}
                  {project.video && (
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/20">
                      <video
                        controls
                        className="w-full h-full"
                        poster={project.video.thumbnail}
                      >
                        <source src={project.video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* Image Grid */}
                  {project.images && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-black/20"
                          onClick={() => setSelectedImage(image)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm">Click to enlarge</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Link */}
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      View on GitHub
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
}
