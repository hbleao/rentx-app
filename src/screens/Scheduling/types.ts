import { CarDTO } from "../../dtos/CarDTO";

export type SchedulingParamsProps = {
  car: CarDTO;
}

export type DateValueProps = {
  selected: boolean;
}

export type RentalPeriodProps = {
  startFormatted: string;
  endFormatted: string;
}