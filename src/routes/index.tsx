import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { PublicStackRoutes } from './public.stack.routes';
import { TabPrivateRoutes } from './app.tab.routes';

import { selectAuth, asyncLogin } from '../store/reducers';

export const Routes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const handleAsyncLogin = useCallback(() => {
    dispatch(asyncLogin());
  }, []);

  useEffect(() => {
    let isMount = true;

    if(isMount) {
      handleAsyncLogin();
    }

    return () => {
      isMount = false;
    }
  }, []);

  return (
    <NavigationContainer>
      {user?.id ? <TabPrivateRoutes /> : <PublicStackRoutes />}
    </NavigationContainer>
  )
}
