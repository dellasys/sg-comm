import React from "react";
import { Path, G, Svg } from "react-native-svg";

const LocationPin = ({ size = 15 }: IconProps) => {
  return (
    <Svg height={size} viewBox="0 0 512 512" width={size}>
      <G>
        <Path
          id="XMLID_214_"
          d="m256 32.31c85.36 0 154.53 69.2 154.53 154.53 0 64-114.82 220.49-154.53 292.07-38.07-68.7-154.53-231.83-154.53-292.07 0-85.33 69.2-154.53 154.53-154.53zm69.07 148.71c0-38.03-31.02-69.05-69.07-69.05-38.02 0-69.04 31.02-69.04 69.05 0 38.02 31.02 69.04 69.04 69.04 38.05 0 69.07-31.02 69.07-69.04z"
          fill="#e74c3c"
        />
      </G>
    </Svg>
  );
};

export default LocationPin;
