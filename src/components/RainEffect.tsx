'use client';

import { useEffect, useRef } from 'react';
import '../app/animations/rain.css';

const RainEffect = () => {
    const rainContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!rainContainerRef.current) return;

        const createRaindrop = () => {
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            
            // Random positioning and animation duration
            const startPosition = Math.random() * window.innerWidth;
            const duration = 1 + Math.random() * 0.5;
            
            raindrop.style.left = `${startPosition}px`;
            raindrop.style.animationDuration = `${duration}s`;

            return raindrop;
        };

        const addRaindrops = () => {
            if (!rainContainerRef.current) return;

            const raindrop = createRaindrop();
            rainContainerRef.current.appendChild(raindrop);

            // Remove raindrop after animation
            raindrop.addEventListener('animationend', () => {
                raindrop.remove();
            });
        };

        // Create initial raindrops
        for (let i = 0; i < 50; i++) {
            setTimeout(() => addRaindrops(), Math.random() * 2000);
        }

        // Continue adding raindrops
        const interval = setInterval(addRaindrops, 50);

        return () => {
            clearInterval(interval);
            if (rainContainerRef.current) {
                rainContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={rainContainerRef} className="rain" />;
};

export default RainEffect;
