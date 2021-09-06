//framer-motion
import { motion } from "framer-motion"

//stagger
export const stagger = {
  initial: {
    opacity: 0.1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

//right
export const longBorder = {
  initial: { width: "0rem", opacity: 0 },
  animate: {
    width: "100%",
    opacity: 1,
    transition: { duration: 1.7, ease: "easeInOut" },
  },
}

export const rightBlockH4 = {
  initial: { x: 600, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
}

//left
export const shortBorder = {
  initial: { width: "0rem", opacity: 0 },
  animate: {
    width: "90%",
    opacity: 1,
    transition: { duration: 1.7, ease: "easeInOut" },
  },
}

export const leftBlockH4 = {
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
}
