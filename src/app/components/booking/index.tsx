import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'


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

type Props = TouchableOpacityProps & {
  booking: BookingsProps,
}

export function Booking({ booking, ...rest }: Props) {

  let guests = booking.peoples.map((people, index) => people.name + ' ')

  return <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.name}>{guests} </Text>
      <Text style={styles.text}>Observação: {booking.observation}</Text>
  </TouchableOpacity>
}