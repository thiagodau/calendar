import { StyleSheet } from "react-native";
import { todayString } from "react-native-calendars/src/expandableCalendar/commons";

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
    marginTop: 42
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
  }
})