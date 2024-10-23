import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    padding: 24,
  },
  calendar: {
    backgroundColor: 'transparent',

  },
  selected: {
    color: '#fff',
    fontSize: 16,
    marginTop: 16
  },
  dayText: {
    color: '#e8e8e8',
  },
  day: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    
  },
  disabled: {
    color: '#717171'
  },
  today: {
    color: '#f06543',
    fontWeight: 'bold'
  },
  daySelected: {
    backgroundColor: '#f06543',
  },
  text: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  bottomSheetContent: {
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 32,
    paddingRight: 32,
    gap: 12
  },
  guest: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  empty: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 24,
  }
})