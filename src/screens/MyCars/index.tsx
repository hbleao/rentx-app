import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons';

import {
  Appointment,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarWrapper,
  CarFooter,
  CarTitle,
  CarFooterPeriod,
  CarFooterDate,
  Container,
  Content,
  Header,
  Subtitle,
  Title
} from './styles';

import { useTheme } from "styled-components";
import { selectAuth } from "../../store/reducers";

import { BackButton, Car, LoaderAnimation } from "../../components";

import { getScheduleByUser } from "../../services";

import { ScheduledByUserIdDTO } from "../../dtos/ScheduleDTO";

export const MyCars = ({ navigation }) => {
  const { colors } = useTheme();
  const auth = useSelector(selectAuth);
  const [cars, setCars] = useState<ScheduledByUserIdDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadCarsList() {
    try {
      setIsLoading(true);
      const scheduleCarsByUserIdResponse = await getScheduleByUser(auth.user.id);
      setCars(scheduleCarsByUserIdResponse);
    } catch (error) {
      console.error('loadCarsList', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    loadCarsList();
  }, []);

  return (
    <Container>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          color={colors.shape} 
          onPress={handleGoBack}
        />
        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </Title>

        <Subtitle>
          Conforto, segutança e praticidade.
        </Subtitle>
      </Header>

      <Content>
        <Appointment>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          {!isLoading && <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>}
        </Appointment>

        {isLoading ? (
          <LoaderAnimation />
        ) : (
          <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => 
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarTitle>Período</CarTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign 
                      name="arrowright"
                      size={20}
                      color={colors.title}
                      style={{ marginHorizontal: 10 }} 
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            }
          />
        )}
      </Content>
    </Container>
  )
}
