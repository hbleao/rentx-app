import { CarDTO } from "../../dtos/CarDTO";

export type CarData = {
  data: CarDTO;
  onPress?: () => void;
}