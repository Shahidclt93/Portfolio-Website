import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reaveal = ({ children, width = "100%", axis, axisValue, AnimDelay }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const axisPoint = parseInt(axisValue);
  const axisVal = axis === "x" ? true : false;

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={
          axisVal
            ? {
                hidden: { opacity: 0, x: axisPoint },
                visible: { opacity: 1, x: 0 },
              }
            : {
                hidden: { opacity: 0, y: axisPoint },
                visible: { opacity: 1, y: 0 },
              }
        }
        initial="hidden"
        animate={mainControls}
        transition={{ duration: "0.6", delay: AnimDelay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reaveal;
