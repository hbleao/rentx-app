import { wMelonDatabase } from '../../database';
import { User } from '../../database/model/User';

import { UserProps } from '../../dtos/AuthDTO';

export const registerOfflineUser = async ({
  user_id,
  email,
  name,
  driver_license,
  avatar,
  token
}: UserProps) => {
  const userCollection = wMelonDatabase.get<User>('users');

  const newOfflineUser = await wMelonDatabase.write(async () => {
    return await userCollection.create(newUser => {
      newUser.user_id = user_id;
      newUser.name = name;
      newUser.avatar = avatar;
      newUser.email = email;
      newUser.driver_license = driver_license;
      newUser.token = token
    });
  });
  return newOfflineUser;
};
