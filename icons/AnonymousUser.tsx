import React from "react";
import { Path, G, Ellipse, Svg } from "react-native-svg";

const AnonymousUser = ({ size = 14 }: IconProps) => {
  return (
    <Svg id="Layer_1" viewBox="0 0 512 512" width={size} height={size}>
      <G clipRule="evenodd" fillRule="evenodd">
        <Ellipse
          cx="256"
          cy="256"
          fill="#9facba"
          rx="240"
          ry="240"
          transform="matrix(.707 -.707 .707 .707 -106.039 256)"
        />
        <G>
          <Ellipse
            cx="253.82"
            cy="196.68"
            fill="#ffdec2"
            rx="86.54"
            ry="86.54"
            transform="matrix(.993 -.122 .122 .993 -22.024 32.31)"
          />
          <Path
            d="m426.92 424.46c-43.53 44.16-104.02 71.54-170.92 71.54-68.5 0-130.3-28.7-174.03-74.74 27.4-68.53 94.1-117.51 171.85-118.68 78.96 1.19 146.51 51.68 173.1 121.88z"
            fill="#a6e7f0"
          />
        </G>
      </G>
    </Svg>
  );
};

export default AnonymousUser;
