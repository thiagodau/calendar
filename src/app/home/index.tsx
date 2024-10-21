import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Calendar, DateData, LocaleConfig } from 'react-native-calendars'
import { DayState } from 'react-native-calendars/src/types'
import { ptBR } from "@/utils/localeCalendarConfig";

import { styles } from './styles';

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export function Home() {
  const [day, setDay] = useState<DateData>();

  useEffect(() => {

    const date = new Date();

    const dateData = {
      year: date.getFullYear(),
      month: date.getMonth() + 1, // Mês começa do zero
      day: date.getDate(),
      timestamp: date.getTime(), // Retorna o timestamp em milissegundos
      dateString: date.toDateString(),
    };

    setDay(dateData);

  }, [])

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        headerStyle={{ borderBottomWidth: .5, borderBottomColor: '#e8e8e8', paddingBottom: 10, marginBottom: 10 }}
        theme={{
          textMonthFontSize: 18,
          monthTextColor: '#e8e8e8',
          todayTextColor: '#f06543',
          selectedDayBackgroundColor: '#f06543',
          selectedDayTextColor: '#e8e8e8',
          calendarBackground: 'transparent',
          textDayStyle: { color: '#e8e8e8' },
          textDisabledColor: '#717171',
        }}
        hideExtraDays
        minDate={new Date().toDateString()}
        onDayPress={setDay}
        markedDates={
          day && {
            [day.dateString]: { selected: true }
          }}
        dayComponent={({ date, state }: {
          date: DateData
          state: DayState
        }) => {
          return (
            <TouchableOpacity
              style={[
                styles.day,
                date.dateString === day?.dateString &&
                styles.daySelected
              ]}
              onPress={() => setDay(date)}
            >
              <Text
                style={[
                  styles.dayText,
                  (state === 'inactive' || state === 'disabled') && styles.disabled,
                  state === 'today' && styles.today,
                  date.dateString === day?.dateString && styles.dayText
                ]}>
                {date.day}
              </Text>
            </TouchableOpacity>
          )
        }}
      />

      <Text style={styles.selected}>Data selecionada: {day?.dateString}</Text>
    </View>
  )
}