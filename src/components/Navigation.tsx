'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: '/images/nav_bar_icons/home.svg' },
    { href: '/experience', label: 'Experience', icon: '/images/nav_bar_icons/experience.svg' },
    { href: '/projects', label: 'Projects', icon: '/images/nav_bar_icons/projects.svg' },
    { href: '/gallery', label: 'Gallery', icon: '/images/nav_bar_icons/gallery.svg' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/jan-pastor-781767218/',
      label: 'LinkedIn',
      icon: '/images/nav_bar_icons/linkedin.svg',
    },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-[#1E3A5F]/70 backdrop-blur-sm z-50">
      <div className="h-full py-8 px-4">
        <div className="flex flex-col h-full">
          {/* Logo/Home */}
          <Link
            href="/"
            className={`flex items-center gap-4 p-2 rounded-lg mb-8 hover:bg-[#2778a3]/20 active:bg-[#2778a3]/30 transition-colors cursor-pointer ${
              pathname === '/' ? 'bg-[#2778a3]/20' : ''
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/nav_bar_icons/arrow.svg"
                alt="Logo"
                width={24}
                height={24}
                priority
              />
            </div>
            <span className="font-semibold text-white whitespace-nowrap">
              Jan Pastor
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 p-2 rounded-lg hover:bg-[#2778a3]/20 active:bg-[#2778a3]/30 transition-colors cursor-pointer ${
                  pathname === item.href ? 'bg-[#2778a3]/20' : ''
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={24}
                    height={24}
                    priority
                  />
                </div>
                <span className="text-white/90 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-auto">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#2778a3]/20 active:bg-[#2778a3]/30 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={24}
                    height={24}
                    priority
                  />
                </div>
                <span className="text-white/90 whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
