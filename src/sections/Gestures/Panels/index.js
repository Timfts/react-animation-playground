import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Styled from "./Panels.styled";

/**
 * @description inspired by the Dimest 'Movie 2.0' design on dribbble
 * @url https://dribbble.com/shots/8257559-Movie-2-0
 */

export default function PanelsApp() {
  return (
    <Styled.root>
      <p>main</p>
      <Styled.moviePanels>
        <Styled.panel
          as={motion.div}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        >
          teste
        </Styled.panel>
      </Styled.moviePanels>
    </Styled.root>
  );
}
