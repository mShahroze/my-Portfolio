'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
} from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Tech Solutions Inc.',
    period: '2019 - Present',
    description:
      'Developed and maintained web applications using React, Node.js, and MySQL.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Digital Creations',
    period: '2018 - 2019',
    description:
      'Assisted in building responsive websites and e-commerce platforms using HTML, CSS, and JavaScript.',
  },
];

const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    year: '2018',
  },
  {
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Northcoders',
    year: '2019',
  },
];

const Resume: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FaBriefcase className="mr-2 text-blue-500" />
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">
                  {exp.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FaGraduationCap className="mr-2 text-purple-500" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-medium text-purple-600 dark:text-purple-400">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.institution} | {edu.year}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/assets/Muhammad_S_Bilal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            <FaDownload className="mr-2" />
            Download Full CV
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
