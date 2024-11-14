'use client';

import { useEffect, useRef } from 'react';
import '../app/animations/bubbles.css';

const BubbleEffect = () => {
    const bubbleContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bubbleContainerRef.current) return;

        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Random size and position
            const size = 10 + Math.random() * 30;
            const startPosition = Math.random() * window.innerWidth;
            const duration = 6 + Math.random() * 4;
            const delay = Math.random() * 2;
            
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${startPosition}px`;
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.animationDelay = `${delay}s`;

            return bubble;
        };

        const addBubbles = () => {
            if (!bubbleContainerRef.current) return;

            const bubble = createBubble();
            bubbleContainerRef.current.appendChild(bubble);

            // Remove bubble after animation
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        };

        // Create initial bubbles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => addBubbles(), Math.random() * 3000);
        }

        // Continue adding bubbles
        const interval = setInterval(addBubbles, 300);

        return () => {
            clearInterval(interval);
            if (bubbleContainerRef.current) {
                bubbleContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return <div ref={bubbleContainerRef} className="bubbles" />;
};

export default BubbleEffect;
