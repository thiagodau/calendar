import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 30,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'flex-end',
  },
  text: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  bottomSheetContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
  contactName: {
    fontSize: 32,
    fontFamily: theme.FontFamily.bold,
  }
})