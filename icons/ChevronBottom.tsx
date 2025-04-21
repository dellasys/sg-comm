import React from "react";
import { Path, Svg } from "react-native-svg";

const ChevronBottom = ({ size = 20 }: IconProps) => {
  return (
    <Svg height={size} viewBox="0 0 128 128" width={size}>
      <Path d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z" />
    </Svg>
  );
};

export default ChevronBottom;
