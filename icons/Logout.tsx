import React from "react";
import { Path, G, Svg } from "react-native-svg";

const Logout = ({ size = 14 }: IconProps) => {
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size}>
      <G>
        <G fill="#ef9a9a">
          <Path d="m21.69 11.71a.78.78 0 0 0 -.16-.24l-2-2a.75.75 0 0 0 -1.06 1.06l.72.72h-5.19a.75.75 0 0 0 0 1.5h5.19l-.72.72a.75.75 0 0 0 0 1.06.75.75 0 0 0 1.06 0l2-2a.78.78 0 0 0 .16-.24.73.73 0 0 0 0-.58z" />
          <Path d="m17 20.75h-6a.75.75 0 0 1 0-1.5h6a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 1.5 0v2a1.76 1.76 0 0 1 -1.75 1.75z" />
          <Path d="m18 7.75a.76.76 0 0 1 -.75-.75v-2a.25.25 0 0 0 -.25-.25h-6a.75.75 0 0 1 0-1.5h6a1.76 1.76 0 0 1 1.75 1.75v2a.76.76 0 0 1 -.75.75z" />
        </G>
        <Path
          d="m11.08 2.9a1.76 1.76 0 0 0 -1.5-.32l-6 1.5a1.75 1.75 0 0 0 -1.33 1.7v12.44a1.75 1.75 0 0 0 1.33 1.7l6 1.5a2 2 0 0 0 .42 0 1.74 1.74 0 0 0 1.75-1.75v-15.39a1.77 1.77 0 0 0 -.67-1.38z"
          fill="#f44336"
        />
      </G>
    </Svg>
  );
};

export default Logout;
