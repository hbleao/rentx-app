import { wMelonDatabase } from '../../database';
import { User } from '../../database/model/User';

export const deleteOfflineUser = async (id: string) => {
  await wMelonDatabase.write(async () => {
    const userCollection = await wMelonDatabase.get<User>('users');
    const userSelected = await userCollection.find(id);
    await userSelected.markAsDeleted();
    await userSelected.destroyPermanently();
  });
}
