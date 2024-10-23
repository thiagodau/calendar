import { appSchema } from '@nozbe/watermelondb'

import { bookingSchema } from './bookingSchema'

export const schemas = appSchema({
  version: 1,
  tables: [bookingSchema],
})