import React from "react";
import { motion } from "framer-motion";
import { SvgTextBoxStyled } from "../styles/SvgTextBox";

const svgVariants = {
  hidden: { scale: 0.85 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  },
};
const SvgText = () => {
  return (
    <SvgTextBoxStyled
      viewBox="0 0 494.06 80.28"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      fill="none"
      stroke="#fff"
      strokeWidth="2px"
    >
      <motion.path
        d="M0,54.65l5.33-6.41C8.06,51.98,11.38,54,15.34,54c5.18,0,7.85-3.1,7.85-9.29V18.64H5.26v-7.85h27.29v33.41
        c0,11.88-5.9,17.71-16.99,17.71C9.22,61.92,3.46,59.33,0,54.65z"
        variants={pathVariants}
      />
      <motion.path
        d="M79.13,49.53h-25.2L48.96,61.2h-9.65l22.68-50.4h9.22l22.75,50.4h-9.79L79.13,49.53z M76.03,42.19l-9.5-22.03L57.1,42.19
         H76.03z"
        variants={pathVariants}
      />
      <motion.path
        d="M119.59,40.1l-7.99,8.21V61.2h-9.36v-50.4h9.36v25.85l24.91-25.85h10.51l-21.17,22.54l22.47,27.87h-10.94L119.59,40.1z"
        variants={pathVariants}
      />
      <motion.path
        d="M155.45,39.24V10.79h9.36v28.08c0,10.37,4.68,14.83,12.82,14.83s12.75-4.46,12.75-14.83V10.79h9.22v28.44
         c0,14.69-8.28,22.68-22.03,22.68C163.73,61.92,155.45,53.93,155.45,39.24z"
        variants={pathVariants}
      />
      <motion.path
        d="M259.35,47.52c0,8.64-6.77,13.68-19.73,13.68h-25.06v-50.4h23.62c12.1,0,18.58,5.11,18.58,13.1c0,5.18-2.59,9-6.48,11.09
        C255.67,36.72,259.35,40.97,259.35,47.52z M223.92,18.14v13.9h13.25c6.48,0,10.15-2.3,10.15-6.91c0-4.68-3.67-6.98-10.15-6.98
        H223.92z M249.91,46.58c0-5.04-3.82-7.27-10.87-7.27h-15.12v14.54h15.12C246.1,53.85,249.91,51.62,249.91,46.58z"
        variants={pathVariants}
      />
      <motion.path
        d="M335.16,28.72c0,11.09-8.21,17.93-21.46,17.93h-11.38V61.2h-9.36v-50.4h20.74C326.95,10.79,335.16,17.56,335.16,28.72z
        M325.73,28.72c0-6.34-4.25-10.01-12.46-10.01h-10.95v20.02h10.95C321.48,38.73,325.73,35.06,325.73,28.72z"
        variants={pathVariants}
      />
      <motion.path
        d="M376.56,49.53h-25.2l-4.97,11.67h-9.65l22.68-50.4h9.22l22.75,50.4h-9.79L376.56,49.53z M373.46,42.19l-9.5-22.03
        l-9.43,22.03H373.46z"
        variants={pathVariants}
      />
      <motion.path
        d="M399.67,10.79h9.36v42.48h26.35v7.92h-35.71V10.79z"
        variants={pathVariants}
      />
      <motion.path
        d="M477.72,49.53h-25.2l-4.97,11.67h-9.65l22.68-50.4h9.22l22.75,50.4h-9.79L477.72,49.53z M474.62,42.19l-9.5-22.03
        l-9.43,22.03H474.62z"
        variants={pathVariants}
      />
    </SvgTextBoxStyled>
  );
};

export default SvgText;
