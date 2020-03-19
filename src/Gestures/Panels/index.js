import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PanelsAppStyled from "./Panels.styled";

/**
 * @description inspired by the Dimest 'Movie 2.0' design on dribbble
 * @url https://dribbble.com/shots/8257559-Movie-2-0
 */

const PanelsApp = () => {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
    clamp: false
  });

  return (
    <PanelsAppStyled.root>
      <p>main</p>
      <PanelsAppStyled.moviePanels
        as={motion.div}
        drag="x"
        
        ref={constraintsRef}
        style={{ rotateY }}
      >
        teste
      </PanelsAppStyled.moviePanels>
    </PanelsAppStyled.root>
  );
};

export default PanelsApp;
