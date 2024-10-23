import { tableSchema } from '@nozbe/watermelondb'

export const bookingSchema = tableSchema({
  name: 'bookings',
  columns: [
    { name: 'contact', type:'string' },
    { name: 'observation', type:'string' },
    { name: 'peoples', type:'string' },
    { name: 'dates', type:'string' },
  ]
})