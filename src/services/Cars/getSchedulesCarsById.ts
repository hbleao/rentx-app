import { api } from "../api";

import { ScheduledByIdDTO } from "../../dtos/ScheduleDTO";

export const getSchedulesCarsById = async (id: string): Promise<ScheduledByIdDTO> => {
  const schedulesByCarId = await api.get(`/rentals`);
  
  return schedulesByCarId.data;
}
