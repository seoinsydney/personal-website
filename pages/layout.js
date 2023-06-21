import React from 'react';
import SEOHead from '../components/seoHead';
import TopMenu from '../components/topMenu';
import { motion, AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <>
      <SEOHead />
      <TopMenu />
      <AnimatePresence>
        <main>
          <motion.div
          initial={{ opacity: 0, y: 15}}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 15}}
          transition={{ delay: 0.50}}
          >{children}
          </motion.div>
        </main>
      </AnimatePresence>
    </>
  );
};

export default Layout;

