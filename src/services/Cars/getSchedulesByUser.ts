import { api } from "../api";

import { ScheduledByUserIdDTO } from "../../dtos/ScheduleDTO";

export const getScheduleByUser = async (userId: string): Promise<ScheduledByUserIdDTO[]> => {
  const schedulesByCarId = await api.get(`/schedules_byuser/?user_id=${userId}`);
  
  return schedulesByCarId.data;
}
