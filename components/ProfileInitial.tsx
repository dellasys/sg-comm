import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface ProfileInitialProps {
  name?: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
}

// Generates only darker colors (better contrast with white text)
const getDarkRandomColor = () => {
  // Limit to darker hues by using lower values (0-9)
  const darkLetters = "0123456789"; // Only numbers = darker colors
  let color = "#";

  // First two characters (red and green components) - keep dark
  for (let i = 0; i < 2; i++) {
    color += darkLetters[Math.floor(Math.random() * darkLetters.length)];
  }

  // Blue component can be slightly brighter for variety
  color += Math.floor(Math.random() * 5).toString(16);

  return color;
};

const ProfileInitial = ({
  name,
  size = 70,
  backgroundColor,
  textColor = "white",
  onPress,
}: ProfileInitialProps) => {
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  // Generate a background color if none provided
  const bgColor = backgroundColor ?? getDarkRandomColor();

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <ThemedView
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: 5,
            backgroundColor: bgColor,
          },
        ]}
      >
        <ThemedText
          style={[
            styles.text,
            {
              color: textColor,
              fontSize: size / 1.3,
              lineHeight: size * 0.9,
            },
          ]}
        >
          {initial}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default ProfileInitial;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});
