import { api } from "../../api";

import { BodyTypes } from './types';

export const registerUser = async (body: BodyTypes) => {
  const httpUserResponse = await api.post('/users', body);

  return httpUserResponse;
}
