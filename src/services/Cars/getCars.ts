import { api } from "../api";

import { CarDTO } from "../../dtos/CarDTO";

export const getCarsServices = async (): Promise<CarDTO[]> => {
  const httpCarsResponse = await api.get<CarDTO[]>('/cars');
  
  return httpCarsResponse.data;
}
