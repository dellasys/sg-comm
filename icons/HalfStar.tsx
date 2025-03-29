import React from "react";
import { Path, G, Svg } from "react-native-svg";

const HalfStar = ({ color = "#ffc107", size = 15 }: IconProps) => {
  return (
    <Svg
      id="Layer_1"
      enable-background="new 0 0 64 60.001"
      height={size}
      viewBox="0 0 64 60.001"
      width={size}
    >
      <G id="Star">
        <G>
          <Path
            clip-rule="evenodd"
            d="m63.824 22.668c-.399-1.23-1.443-2.144-2.723-2.384l-17.434-3.279-8.565-15.197c-.627-1.116-1.815-1.808-3.102-1.808-.005 0-.01.001-.015.001h.015v52.288l16.083 7.384c.478.219.986.326 1.493.326.743 0 1.479-.23 2.101-.681 1.044-.758 1.589-2.02 1.427-3.294l-2.196-17.19 12.111-12.651c.895-.936 1.205-2.285.805-3.515z"
            fill="#ccc"
            fill-rule="evenodd"
          />
        </G>
      </G>
      <G id="Star_1_">
        <G>
          <Path
            clip-rule="evenodd"
            d="m32 .001h.015c-.005 0-.01-.001-.015 0-1.287-.001-2.476.691-3.104 1.807l-8.564 15.197-17.435 3.279c-1.279.24-2.323 1.153-2.723 2.384s-.09 2.579.807 3.515l12.11 12.651-2.197 17.19c-.163 1.274.384 2.536 1.427 3.294.62.45 1.358.681 2.101.681.507 0 1.016-.107 1.492-.326l16.086-7.384z"
            fill={color}
            fill-rule="evenodd"
          />
        </G>
      </G>
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
      <G />
    </Svg>
  );
};

export default HalfStar;
