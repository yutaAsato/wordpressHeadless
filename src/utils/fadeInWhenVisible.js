import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
// import "./styles.css"

function FadeWhenVisible({ children, custom }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      style={{ width: "100%", height: "100%", display: "block" }}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      variants={custom}
    >
      {children}
    </motion.div>
  )
}

export { FadeWhenVisible }
