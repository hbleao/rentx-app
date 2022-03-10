import { wMelonDatabase } from '../../database';
import { User } from '../../database/model/User';

import { UserProps } from '../../dtos/AuthDTO';

export const updateOfflineUser = async (user: UserProps) => {
  await wMelonDatabase.write(async () => {
    const userCollection = await wMelonDatabase.get<User>('users');
    const userSelected = await userCollection.find(user.id);
    console.log("userSelected: ", userSelected);
    await userSelected.update(offlineUser => {
      offlineUser.name = user.name,
      offlineUser.email = user.email,
      offlineUser.driver_license = user.driver_license,
      offlineUser.avatar = user.avatar
    });
  });
}
