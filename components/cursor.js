import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion"

const CursorEffect = () => {
    const [ mousePosition, setMousePosition ] = useState({
      x: 0,
      y: 0
    })
    // console.log(mousePosition)

    const [ cursorVariant, setCursorVariant ] = useState("default")
  
    useEffect(()=>{
      const mouseMove = e => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }
      window.addEventListener("mousemove", mouseMove);
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      }
    }, [setMousePosition])
  
    const variants = {
      default: {
        x: mousePosition.x -14,
        y: mousePosition.y -70,
        backgroundColor: "#FF3EEC",
        height: '32px',
        width: '32px',
        borderRadius: '50%',
      },
      text: {
        x: mousePosition.x -14,
        y: mousePosition.y -70,
        backgroundColor: "black",
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        pointerEvents: 'none',
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.1 }
      }
    }
  
    return (
      <AnimatePresence>
        <motion.div
        variants={variants}
        initial="default"
        animate={cursorVariant}
        exit="exit"
        />
      </AnimatePresence>
    );
  };
  
  export default CursorEffect;
