import { useState } from 'react';
import SEOHead from './seoHead';
import TopMenu from './topMenu';
import { motion, AnimatePresence } from "framer-motion"
// import Cursor from './cursor';
// import SwitchTheme from '../components/switchTheme';

const Layout = ({ children }) => {
  const [ cursorVariant, setCursorVariant ] = useState("default")
  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")
  return (
    <>
      <SEOHead />
      {/* <SwitchTheme> */}
        <>
        <TopMenu />           
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 15}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: 15}}
            transition={{ delay: 0.5, duration: 0.3 }}
            >
            {/* <Cursor /> */}
            <main
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            >
              {children}
              </main>

            </motion.div>
        </AnimatePresence>
        </>
      {/* </SwitchTheme> */}
    </>
  );
};

export default Layout;

