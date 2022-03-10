import React, { useEffect, useState } from 'react';
import { 
  FlatList, 
  StatusBar, 
} from 'react-native';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import NetInfo from '@react-native-community/netinfo';

import {
  Container,
  Header,
  HeaderContent,
  TotalCards,
} from './styles';

import { 
  Car, 
  DragButton, 
  LoaderAnimation 
} from '../../components';

import Logo from '../../assets/logo.svg';

import { getCarsServices } from '../../services';

import { CarDTO } from '../../dtos/CarDTO';

export const Home = gestureHandlerRootHOC(({ navigation }: any) => {
  const { colors } = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoadingCarList, setIsLoadingCarList] = useState(false);

  async function loadCarsList() {
    try {
      setIsLoadingCarList(true);
      const carsListResponseService = await getCarsServices();
      setCars(carsListResponseService);
    } catch (error) {
      console.error('loadCarsList', loadCarsList);
    } finally {
      setIsLoadingCarList(false);
    }
  };

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

  function handleNetInfo() {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });
  }

  useEffect(() => {
    let isMounted = true;
    if(isMounted) loadCarsList();
    return () => {
      isMounted = false;
    }
  }, []);

  useEffect(() => {
    handleNetInfo();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(24)}
          />
          {!isLoadingCarList && (
            <TotalCards>
              Total de {cars.length} carros
            </TotalCards>
          )}

        </HeaderContent>
      </Header>

      {isLoadingCarList ? (
        <LoaderAnimation />
      ):(
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 24
          }}
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <Car 
              data={item} 
              onPress={() => handleCarDetails(item)} 
            />
          }
        />
      )}

      <DragButton
        onPress={handleOpenMyCars} 
        colorButton={colors.main} 
      />
    </Container>
  )
})
