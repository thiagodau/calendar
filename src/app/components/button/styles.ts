import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    marginTop: 32
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.FontFamily.medium,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  }
})