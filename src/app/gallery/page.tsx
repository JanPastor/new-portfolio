'use client';

import BubbleEffect from '@/components/BubbleEffect';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { useState } from 'react';

interface ImageModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
             onClick={onClose}>
            <div className="relative max-w-7xl w-full max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-4xl hover:text-gray-300"
                >
                    &times;
                </button>
                <div className="relative h-full">
                    <img
                        src={src}
                        alt={alt}
                        className="mx-auto max-h-[80vh] object-contain"
                    />
                    <p className="text-white text-center mt-4">{alt}</p>
                </div>
            </div>
        </div>
    );
};

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    const mateRovImages = [
        { src: '/images/mate_rov_team/teaching_brycen.jpg', alt: 'Supervising Brycen on soldering techniques' },
        { src: '/images/mate_rov_team/teaching_Jasmine.jpg', alt: 'Teaching Jasmine how to solder' },
        { src: '/images/mate_rov_team/with_Brycen.jpg', alt: 'Teaching Brycen how to solder' },
        { src: '/images/mate_rov_team/me_soldering.jpg', alt: 'Jan soldering the tether together' },
        { src: '/images/mate_rov_team/software_flowchart.jpg', alt: 'Drawing the software flowchart with Dana' },
        { src: '/images/mate_rov_team/me_explain_motors1.jpg', alt: 'Explaining the thruster control system to team' },
        { src: '/images/mate_rov_team/me_explain_motors3.jpeg', alt: 'Explaining the thruster control system again' },
        { src: '/images/mate_rov_team/me_explain_motors_best.JPG', alt: 'Explaining the thruster control system yet again' },
        { src: '/images/mate_rov_team/deck_crew_competition2.jpg', alt: 'Me and David on deck' },
        { src: '/images/mate_rov_team/copilot_and_pilot.jpg', alt: 'Copilot: Jan Pastor (left), Pilot: Dana (right)' },
        { src: '/images/mate_rov_robot/water_demo_with_dana.jpg', alt: 'Water demo test with (left) Jan and Dana (right)' },
        { src: '/images/mate_rov_robot/gui1.jpg', alt: 'Graphical user interface close up view' },
        { src: '/images/mate_rov_robot/gui2.jpg', alt: 'Graphical user interface close up view 2' },
        { src: '/images/mate_rov_robot/hydra_water_demo1.jpg', alt: 'Water demo test 1' },
        { src: '/images/mate_rov_robot/hydra_water_demo2.jpg', alt: 'Water demo test 2' },
        { src: '/images/mate_rov_robot/hydra_waterdemo3.jpg', alt: 'Water demo test 3' },
        { src: '/images/mate_rov_robot/hydra_waterdemo4.jpg', alt: 'Water demo test 4' },
        { src: '/images/mate_rov_robot/hydra_water_test_with_supervisors.jpg', alt: 'Water demo test w/ supervisors' },
        { src: '/images/mate_rov_robot/internal_electronics.jpg', alt: 'Interior electronics of ROV' },
        { src: '/images/mate_rov_robot/hydra_pyramid_lift.jpg', alt: 'ROV lift task attempt of underwater plastic pyramid' }
    ];

    const mateFloatsImages = [
        { src: '/images/mate_floats_pics/day1_oceanography_janjasmine.jpg', alt: 'Oceanography 101 Lessons' },
        { src: '/images/mate_floats_pics/day2_puget_sound.jpg', alt: 'Seattle, Washington Puget Sound Model' },
        { src: '/images/mate_floats_pics/day3_building_coding_sensors.jpg', alt: 'Building and Coding the Seawater sensors' },
        { src: '/images/mate_floats_pics/day3_floats_lab.jpg', alt: 'Inside of the FLOATs Engineering Lab' },
        { src: '/images/mate_floats_pics/day3_sensor_array.jpg', alt: 'Complete Sensor Array Deployed' },
        { src: '/images/mate_floats_pics/day4_labwork.jpg', alt: 'Chemistry Lab Work' },
        { src: '/images/mate_floats_pics/day5_rachel_carson_group_photo.jpg', alt: 'Rachel Carson Group Photo' },
        { src: '/images/mate_floats_pics/day5_microscope_microbes.jpg', alt: 'Observing Zooplankton under a microscope' },
        { src: '/images/mate_floats_pics/day5_collecting_seawater_samples.jpg', alt: 'Collecting Seawater samples from Rosetta' },
        { src: '/images/mate_floats_pics/UW_portside_sensor_deployment.jpg', alt: 'University of Washington, Seaport' },
        { src: '/images/mate_floats_pics/sea_level_light_test_on_rachel_carson.jpg', alt: 'Me and Jasmine after sea rope test' },
        { src: '/images/mate_floats_pics/zooplankton_net_seattle.jpg', alt: 'Zooplankton net recovered and rinsed' },
        { src: '/images/mate_floats_pics/zooplankton_in_bottle.jpg', alt: 'Zooplankton collected into a bottle' },
        { src: '/images/mate_floats_pics/zooplantkon_in_bottle2.jpg', alt: 'Zooplankton collected into a bottle close up view' },
        { src: '/images/mate_floats_pics/ship_laboratory.jpg', alt: 'On ship laboratory experiment on collected seawater samples' },
        { src: '/images/mate_floats_pics/final_group_photo.jpg', alt: 'Group photo of entire Summer Workshop faculty and cohort' }
    ];

    return (
        <main className="min-h-screen">
            <Navigation />
            <BubbleEffect />
            
            <div className="transition-all duration-300 ml-16 hover:ml-64 p-8">
                <section className="max-w-7xl mx-auto space-y-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span>📸</span> Gallery <span>🎥</span>
                    </h1>

                    {/* MATE ROV Section */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                            MATE ROV Competition 2023 | Pasadena Community College, CA
                        </h2>
                        <h3 className="text-xl text-gray-600 dark:text-gray-300">
                            Lancer Lumineers MATE ROV Club
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {mateRovImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg group"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                            <p className="text-sm">Click to enlarge</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* MATE FLOATS Section */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                            MATE FLOATS Summer 2023 | University of Washington, Seattle
                        </h2>
                        <h3 className="text-xl text-gray-600 dark:text-gray-300">
                            MATE ROV Learning Cohort
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {mateFloatsImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg group"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                            <p className="text-sm">Click to enlarge</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <ImageModal
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </main>
    );
}
