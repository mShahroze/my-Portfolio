'use client';

import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load heavier components
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Contact = lazy(() => import('@/components/Contact'));

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container mx-auto px-4"
    >
      <Hero />

      <motion.section {...fadeInUp}>
        <About />
      </motion.section>

      <motion.section {...fadeInUp}>
        <Skills />
      </motion.section>

      <motion.section {...fadeInUp}>
        <Suspense fallback={<LoadingSpinner />}>
          <Portfolio />
        </Suspense>
      </motion.section>

      <motion.section {...fadeInUp}>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </motion.section>
    </motion.div>
  );
};

export default Home;
