import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class BookingModel extends Model {
  static table = 'bookings'

  @field('peoples')
  peoples!: string

  @field('contact')
  contact?: string

  @field('dates')
  dates!: string

  @field('observation')
  observation?: string

}