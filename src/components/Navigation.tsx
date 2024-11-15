'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { getAssetPath } from '@/utils/assetPath';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: getAssetPath('/images/nav_bar_icons/home.svg') },
    { href: '/experience', label: 'Experience', icon: getAssetPath('/images/nav_bar_icons/experience.svg') },
    { href: '/projects', label: 'Projects', icon: getAssetPath('/images/nav_bar_icons/projects.svg') },
    { href: '/gallery', label: 'Gallery', icon: getAssetPath('/images/nav_bar_icons/gallery.svg') },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/jan-pastor-781767218/',
      label: 'LinkedIn',
      icon: getAssetPath('/images/nav_bar_icons/linkedin.svg'),
    },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-[#1E3A5F]/70 backdrop-blur-sm z-50">
      <div className="flex flex-col h-full p-4">
        <Link
          href="/"
          className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
            pathname === '/' ? 'bg-[#2778a3]/20' : ''
          }`}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src={getAssetPath('/images/nav_bar_icons/arrow.svg')}
              alt="Logo"
              width={24}
              height={24}
              priority
              unoptimized
            />
          </div>
          <span className="text-white font-semibold">Jan Pastor</span>
        </Link>

        <div className="mt-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
                pathname === item.href ? 'bg-[#2778a3]/20' : ''
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
              <span className="text-white">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 hover:bg-[#2778a3]/20"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
              <span className="text-white">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
