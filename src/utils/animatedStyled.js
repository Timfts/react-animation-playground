import React, {forwardRef} from "react";
import styled from "styled-components";

export function animatedStyled(AnimatedComponent, toRemoveProps = []) {
  return styled(forwardRef((props, ref) => {
    const filteredProps = Object.keys(props).reduce((acc, propKey) => {
      return toRemoveProps.includes(propKey)
        ? { ...acc }
        : { ...acc, [propKey]: props[propKey] };
    }, {});
    return <AnimatedComponent {...filteredProps} ref={ref} />;
  }));
}
