import { api } from "../api";

export type BodyTypes = {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

export const registerUser = async (body: BodyTypes) => {
  const httpUserResponse = await api.post('/users', body);
  return httpUserResponse;
}
