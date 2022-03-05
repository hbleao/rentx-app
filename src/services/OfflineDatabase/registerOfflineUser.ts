import { wMelonDatabase } from '../../database';
import { User } from '../../database/model/User';

import { UserProps } from '../../dtos/AuthDTO';

export const registerOfflineUser = async ({
  ...user
}: UserProps) => {
  const userCollection = wMelonDatabase.get<User>('users');

  const newOfflineUser = await wMelonDatabase.write(async () => {
    return await userCollection.create(newUser => {
      newUser.user_id = user.user_id;
      newUser.name = user.name;
      newUser.avatar = user.avatar;
      newUser.email = user.email;
      newUser.driver_license = user.driver_license;
      newUser.token = user.token
    });
  });
  return newOfflineUser;
}
