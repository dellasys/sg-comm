import React from "react";
import { Path, Svg } from "react-native-svg";

const Chevron = ({ color = "#000", size = 20 }: IconProps) => {
  return (
    <Svg
      id="Layer_1"
      height={size}
      viewBox="0 0 512 512"
      width={size}
      data-name="Layer 1"
    >
      <Path
        fill={color}
        d="m121.373 457.373 201.372-201.373-201.372-201.373a32 32 0 0 1 45.254-45.254l224 224a32 32 0 0 1 0 45.254l-224 224a32 32 0 0 1 -45.254-45.254z"
      />
    </Svg>
  );
};

export default Chevron;
