import { api } from "../api";

import { AuthorizationDTO } from "../../dtos/AuthDTO";
import { ParamsProps } from "./type";

export const getAuthorization = async (params: ParamsProps): Promise<AuthorizationDTO> => {
  const httpAuthResponseService = await api.post('/sessions', params);

  api.defaults.headers.common['Authorization'] = `Bearer ${httpAuthResponseService.data.token}`;

  return httpAuthResponseService.data;
}
