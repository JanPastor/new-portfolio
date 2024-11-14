'use client';

import { useEffect } from 'react';

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
        />
        <div className="bg-white/90 dark:bg-gray-800/90 p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">{image.alt}</p>
        </div>
      </div>
    </div>
  );
}
