import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Styled = {
  root: styled.section`
    width: 100%;
  `,
  intro: styled(animated.p)`
    color: red;
  `
};

export default function ReactSpringPage() {
  const { variation } = useSpring({ variation: 1, from: { variation: 0 } });

  return (
    <Styled.root>
      <Styled.intro>{variation}</Styled.intro>
    </Styled.root>
  );
}
