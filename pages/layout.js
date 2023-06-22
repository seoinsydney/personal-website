import React, {useState} from 'react';
import SEOHead from '../components/seoHead';
import TopMenu from '../components/topMenu';
import { motion, AnimatePresence } from "framer-motion"
import Cursor from './../components/cursor';

const Layout = ({ children }) => {
  const [ cursorVariant, setCursorVariant ] = useState("default")
  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  return (
    <>
      <SEOHead />
      <TopMenu />
      <AnimatePresence>
          <motion.div
          initial={{ opacity: 0, y: 15}}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: 15}}
          transition={{ delay: 0.5, duration: 0.3 }}
          >
          <Cursor />
          <main
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          >
            {children}
            </main>
          </motion.div>

      </AnimatePresence>
    </>
  );
};

export default Layout;

