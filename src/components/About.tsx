'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaProjectDiagram } from 'react-icons/fa';

interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: FaCode,
    title: 'Front-end Development',
    description: 'HTML5, CSS3, JavaScript, React',
  },
  {
    icon: FaServer,
    title: 'Back-end Development',
    description: 'Node.js, PHP, MySQL',
  },
  {
    icon: FaProjectDiagram,
    title: 'Project Management',
    description: 'Agile, Scrum, SDLC',
  },
];

const About: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/assets/img/me-new.jpg"
              alt="Muhammad S. Bilal"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </motion.div>
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m a passionate Software Engineer and Web
                Developer with experience in full Software Development
                Life Cycle, Administration, and Project Management. I
                thrive in fast-paced, team-based environments and
                enjoy adapting to new technologies and building
                personal projects.
              </p>
              <p>
                My strongest skills include front-end development with
                HTML5, CSS3, JavaScript, and React, as well as
                back-end development using Node.js, PHP, and MySQL.
                I&apos;m also proficient in using popular web
                techniques like AJAX and JSON.
              </p>
              <p>
                I&apos;m constantly pushing myself out of my comfort
                zone, exploring new territories in the tech world, and
                looking forward to working with like-minded
                professionals to create innovative solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedSkill === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedSkill(index)}
                >
                  <skill.icon className="text-4xl mb-4" />
                  <h3 className="font-semibold text-xl mb-2">
                    {skill.title}
                  </h3>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm"
                    >
                      {skill.description}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
