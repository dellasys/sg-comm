import React from "react";
import { Path, Svg } from "react-native-svg";

const ChevronUp = ({ size = 20 }: IconProps) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <Path
        clipRule="evenodd"
        d="m11.4697 6.46967c.2929-.29289.7677-.29289 1.0606 0l8 8.00003c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-7.4697-7.46964-7.46967 7.46964c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7677 0-1.0606z"
        fill="rgb(0,0,0)"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default ChevronUp;
