import { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { useCustomToast } from "@/state/useCustomToast";

declare let setTimeout: (handler: () => void, timeout?: number) => number;

const ToastMessage = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { toastMessage, clearToastMessage } = useCustomToast();
  const visible = toastMessage !== undefined;
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!visible) return;

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Reset animation and fade in
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Set new timer
    timerRef.current = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(clearToastMessage);
    }, 2000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [clearToastMessage, fadeAnim, visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ThemedText style={styles.text}>{toastMessage}</ThemedText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "50%",
    left: "20%",
    right: "20%",
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 10,
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -25 }],
    zIndex: 1000,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});

export default ToastMessage;
