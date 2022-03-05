export type UserProps = {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

export type AuthorizationDTO = {
  user: UserProps | null;
}