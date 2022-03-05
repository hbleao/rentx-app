import { api } from '../api';
import { wMelonDatabase } from '../../database';
import { User } from '../../database/model/User';

import { UserProps } from '../../dtos/AuthDTO'; 

export const getOfflineUser = async () => {
  const userCollection = wMelonDatabase.get<User>('users');
  const savedUser = await userCollection.query().fetch();

  if (savedUser.length > 0) {
    const userData = savedUser[0]._raw as unknown as UserProps;

    api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

    return userData;
  }

  return {};
}
