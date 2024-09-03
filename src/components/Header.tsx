'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logoAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95, rotate: -5 },
  };

  const linkAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg fixed w-full z-10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <motion.div
                  className="flex flex-shrink-0 items-center"
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={logoAnimation}
                >
                  <Image
                    className="block h-8 w-auto rounded-full border-2 border-indigo-500 dark:border-indigo-400"
                    src="/assets/img/me-new.jpg"
                    alt="Muhammad S. Bilal"
                    width={32}
                    height={32}
                  />
                </motion.div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <motion.div
                          className={`${
                            pathname === item.href
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                          } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                          initial="rest"
                          whileHover="hover"
                          whileTap="tap"
                          variants={linkAnimation}
                        >
                          {item.name}
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <motion.button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                  onClick={() =>
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {mounted &&
                        (theme === 'dark' ? (
                          <FaSun className="h-5 w-5" />
                        ) : (
                          <FaMoon className="h-5 w-5" />
                        ))}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
