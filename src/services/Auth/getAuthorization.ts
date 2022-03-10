import { api } from "../api";

import { UserProps } from "../../dtos/AuthDTO";
import { ParamsProps } from "./type";

export const getAuthorization = async (params: ParamsProps): Promise<UserProps> => {
  const { data } = await api.post('/sessions', params);
  api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

  return {
    id: data.id,
    user_id: data.id,
    email: data.email,
    name: data.name,
    driver_license: data.driver_license,
    avatar: data.avatar,
    token: data.token 
  };
}
