import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schemas } from "./schemas";
import { BookingModel } from "./model/bookingModel";

const adapter = new SQLiteAdapter({
  schema: schemas,
  dbName: "calendar.db",
})

export const database = new Database({
  adapter,
  modelClasses: [BookingModel],
})