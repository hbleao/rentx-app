import { CarDTO } from "../../dtos/CarDTO";

type DatesProps = {
  [key: string]: {
    color: string;
    textColor: string;
  }
}

export type RentalPeriodProps = {
  startFormatted: string;
  endFormatted: string;
}

export type SchedulingDetailsParamsProps = {
  car: CarDTO; 
  dates: DatesProps;
  rentalPeriod: RentalPeriodProps;
  rentalDisabledDates: string[];
}

