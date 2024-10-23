import { useEffect, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { Calendar, DateData, LocaleConfig } from 'react-native-calendars'
import { DayState } from 'react-native-calendars/src/types'
import { ptBR } from "@/utils/localeCalendarConfig";

import { styles } from './styles';
import { Button } from "@/app/components/button";

import { dataBookings } from '@/utils/dataBookings';

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Booking } from "@/app/components/booking";

import { Feather } from '@expo/vector-icons'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

type People = {
  name: string
}

type BookingsProps = {
  id: string,
  peoples: People[],
  contact: string,
  observation: string,
  dates: string[]
}

export function Home() {
  const [day, setDay] = useState<DateData>();
  const [bookings, setBookings] = useState<BookingsProps[]>([]);
  const [booking, setBooking] = useState<BookingsProps>();

  const bottomSheetRef = useRef<BottomSheet>(null)
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  function handleOpenDetails(id: string) {
    setBooking(dataBookings.find((item) => item.id === id))
    handleBottomSheetOpen()
  }

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
    fetchBookings()

  }, [])


  function fetchBookings() {
    try {
      const data = dataBookings;
      const list = data.map((booking) => ({
        id: booking.id,
        peoples: booking.peoples.map(people => people),
        contact: booking.contact,
        observation: booking.observation,
        dates: booking.dates.map(date => date)
      }))

      setBookings(list)
    } catch (e) { console.log(e) }
  }



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

      <Text style={styles.selected}>Reservas nesta data: </Text>


      <View style={{ flex: 1 }}>
        <FlatList
          data={bookings.filter(booking => booking.dates[0] === day?.dateString)}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhuma reserva encontrada.</Text>
          )}
          renderItem={({ item }) => (
            <Booking booking={item} onPress={() => handleOpenDetails(item.id)} />
          )}
        />
      </View>

      <Button title="Reservar Data" onPress={() => console.log(day)} />

      <BottomSheet ref={bottomSheetRef} snapPoints={[0.01, 400]}>
        <BottomSheetView>
          <View style={styles.bottomSheetContent} >
            {booking?.peoples.map((people, index) => (
              <View key={index} style={styles.guest}>
                <Feather name="user" size={22} />
                <Text>Hóspede {index + 1} {people.name}</Text>
              </View>
            ))}
            <View style={styles.guest}>
              <Feather name="arrow-right" size={22} />
              <Text>Check-in: {booking?.dates[0]}</Text>
            </View>
            <View style={styles.guest}>
              <Feather name="arrow-left" size={22} />
              <Text>Check-out: {booking?.dates[1]}</Text>
            </View>
            <View style={styles.guest}>
              <Feather name="phone-call" size={22} />
              <Text>{booking?.contact}</Text>
            </View>
            <View style={styles.guest}>
              <Feather name="book" size={22} />
              <Text>{booking?.observation}</Text>
            </View>
            <Button title="Fechar" onPress={handleBottomSheetClose} />
          </View>
        </BottomSheetView>
      </BottomSheet>

    </View>
  )
}