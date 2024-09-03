import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: FaHtml5,
    color: 'text-orange-500',
    description: 'Semantic markup and structure',
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    color: 'text-blue-500',
    description: 'Styling and responsive design',
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    color: 'text-yellow-500',
    description: 'Dynamic client-side scripting',
  },
  {
    name: 'React',
    icon: FaReact,
    color: 'text-blue-400',
    description: 'Building user interfaces',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: 'text-green-500',
    description: 'Server-side JavaScript runtime',
  },
  {
    name: 'PHP',
    icon: FaPhp,
    color: 'text-purple-500',
    description: 'Server-side scripting language',
  },
  {
    name: 'MySQL',
    icon: FaDatabase,
    color: 'text-blue-600',
    description: 'Relational database management',
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon
                  className={`text-6xl ${skill.color} mb-4 transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg`}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ zIndex: -1 }}
                  initial={false}
                  animate={{
                    scale: [0.95, 1.05, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </motion.div>
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {skill.name}
              </span>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
