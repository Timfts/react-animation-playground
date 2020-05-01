import React from "react";
import styled from "styled-components";

export function animatedStyled(AnimatedComponent, toRemoveProps = []) {
  return styled((props) => {
    const filteredProps = Object.keys(props).reduce((acc, propKey) => {
      return toRemoveProps.includes(propKey)
        ? { ...acc }
        : { ...acc, [propKey]: props[propKey] };
    }, {});
    return <AnimatedComponent {...filteredProps} />;
  });
}
