import { api } from "../api";

import { ScheduledByUserIdDTO } from "../../dtos/ScheduleDTO";

export const registerScheduleByUserId = async (body: ScheduledByUserIdDTO) => {
  const schedulesByCarId = await api.post(`/schedules_byuser/`, body);
  
  return schedulesByCarId.data;
}
