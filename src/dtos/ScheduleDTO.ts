import { CarDTO } from "./CarDTO"

export type ScheduledByIdDTO = {
  id: string;
  unavailable_dates: string[];
}

export type ScheduledByUserIdDTO = {
  id?: string;
  user_id: string;
  car: CarDTO;
  startDate: string,
  endDate: string
}
