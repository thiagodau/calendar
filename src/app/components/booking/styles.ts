import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {color: '#fff'},
  container: {
    width: '100%',
    gap: 5,
    marginTop: 12,
    padding: 12,
    borderTopWidth: 1,
    borderColor: theme.colors.primary,
  },
  name: {
    color: theme.colors.white,
    fontSize: 22,
    fontFamily: theme.FontFamily.medium,
  }
})