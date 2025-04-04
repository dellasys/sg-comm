import React from "react";
import { Path, Svg } from "react-native-svg";

const CopyClipboard = ({ color = "#7A808B", size = 14 }: IconProps) => {
  return (
    <Svg height={size} viewBox="0 0 32 32" width={size} data-name="Layer 1">
      <Path
        fill={color}
        d="m24 29h-12a3 3 0 0 1 -3-3v-16a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a3 3 0 0 1 -3 3zm-12-20a1 1 0 0 0 -1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-16a1 1 0 0 0 -1-1z"
      />
      <Path
        fill={color}
        d="m6 19a1 1 0 0 1 -1-1v-12a3 3 0 0 1 3-3h10a1 1 0 0 1 0 2h-10a1 1 0 0 0 -1 1v12a1 1 0 0 1 -1 1z"
      />
    </Svg>
  );
};

export default CopyClipboard;
