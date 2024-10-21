import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    margin: 12
  },
  name: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.FontFamily.medium,
  }
})