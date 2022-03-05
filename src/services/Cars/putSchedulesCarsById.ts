import { api } from "../api";

import { ScheduledByIdDTO } from "../../dtos/ScheduleDTO";

export const putSchedulesCarsById = async (body: ScheduledByIdDTO) => {
  const schedulesByCarId = await api.put(`/schedules_bycars/${body.id}`, body);
  
  return schedulesByCarId.data;
}
