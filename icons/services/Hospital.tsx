import React from "react";
import { Path, G, Svg } from "react-native-svg";

const Hospital = ({ size = 50 }: IconProps) => {
  return (
    <Svg
      id="Capa_1"
      enable-background="new 0 0 512 512"
      height={size}
      viewBox="0 0 512 512"
      width={size}
    >
      <G>
        <Path d="m13.5 197.835h145v260h-145z" fill="#00b3ff" />
        <Path d="m0 182.835h158.5v30h-158.5z" fill="#5f7883" />
        <Path d="m143.5 126.005h355v331.83h-355z" fill="#f0f7ff" />
        <Path d="m321 126.005h177.5v331.83h-177.5z" fill="#d7e9fc" />
        <Path d="m130 111.005h382v30h-382z" fill="#5f7883" />
        <Path d="m321 111.005h191v30h-191z" fill="#4b5055" />
        <G fill="#f0f7ff">
          <Path d="m78.5 247.835h30v30h-30z" />
          <Path d="m78.5 312.835h30v30h-30z" />
          <Path d="m78.5 377.835h30v30h-30z" />
        </G>
        <Path d="m338.5 312.835h30v30h-30z" fill="#3a80e8" />
        <Path d="m403.5 312.835h30v30h-30z" fill="#3a80e8" />
        <Path d="m273.5 312.835h30v30h-30z" fill="#00b3ff" />
        <Path d="m208.5 312.835h30v30h-30z" fill="#00b3ff" />
        <Path d="m403.5 247.835h30v30h-30z" fill="#3a80e8" />
        <Path d="m338.5 247.835h30v30h-30z" fill="#3a80e8" />
        <G>
          <Path d="m227.3 39.165v173.67h187.4v-173.67z" fill="#ff5f7b" />
        </G>
        <Path d="m321 39.165h93.7v173.67h-93.7z" fill="#ea344a" />
        <Path
          d="m365.07 111.005v30h-29.07v29.07h-30v-29.07h-29.07v-30h29.07v-29.07h30v29.07z"
          fill="#f0f7ff"
        />
        <Path
          d="m365.07 111.005v30h-29.07v29.07h-15v-88.14h15v29.07z"
          fill="#d7e9fc"
        />
        <Path d="m273.5 247.835h30v30h-30z" fill="#00b3ff" />
        <Path d="m208.5 247.835h30v30h-30z" fill="#00b3ff" />
        <Path d="m257.25 377.835h127.5v80h-127.5z" fill="#5fd6ff" />
        <Path d="m321 377.835h63.75v80h-63.75z" fill="#00b3ff" />
        <Path d="m0 442.835h512v30h-512z" fill="#bde760" />
        <Path d="m256 442.835h256v30h-256z" fill="#00d880" />
      </G>
    </Svg>
  );
};

export default Hospital;
