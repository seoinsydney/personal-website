import { useState } from 'react';
import SEOHead from './seoHead';
import TopMenu from './topMenu';
import Footer from './footer';
import { motion, AnimatePresence } from "framer-motion"


const Layout = ({ children }) => {
  const [ cursorVariant, setCursorVariant ] = useState("default")
  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  return (
    <>
      <SEOHead />
        <>
        <TopMenu />           
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 15}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 15}}
            transition={{ delay: 0.5, duration: 0.3 }}
            >
            <main
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            >
              {children}
              </main>

            </motion.div>
        </AnimatePresence>
        <Footer />
        </>
    </>
  );
};

export default Layout;

