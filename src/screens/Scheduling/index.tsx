import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { format } from "date-fns";

import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";

import { 
  BackButton, 
  Button, 
  Calendar, 
  DayProps, 
  Loader, 
  MarkedDatesProps 
} from "../../components";

import ArrowSvg from '../../assets/arrow.svg';

import { generateInterval, getPlatformDate } from "../../utils";

import { RentalPeriodProps, SchedulingParamsProps } from "./types";
import { getSchedulesCarsById } from "../../services";

export const Scheduling = ({ navigation, route }: any) => {
  const { car } = route.params as SchedulingParamsProps;
  const { colors } = useTheme();
  const [lastSelectedDay, setLastSelectedDay] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);
  const [rentalDisabledDates, setRentalDisabledDates] = useState<string[]>([]);
  const [rentalDisabledDatesWithDisabledProperties, setRentalDisabledDatesWithDisabledProperties] = useState<MarkedDatesProps>({} as MarkedDatesProps);
  const [isLoadingScheduledDates, setIsLoadingScheduledDates] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleConfirmScheduling() {
    if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o periodo do que ficará com o carro.');
      return;
    }

    navigation.navigate('SchedulingDetails', {
      car,
      dates: markedDates,
      rentalPeriod,
      rentalDisabledDates
    });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDay.timestamp ? date : lastSelectedDay;
    let end =  date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    
    setLastSelectedDay(end);
    const interval = generateInterval({
      start, 
      end,
      dayColor: colors.main,
      periodColor: colors.main_light
    });
    
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy'),
    });
  }

  async function getScheduledDates() {
    try {
      setIsLoadingScheduledDates(true);
      const scheduledDatesResponse = await getSchedulesCarsById(car.id);

      if(scheduledDatesResponse.unavailable_dates.length < 1) {
        return;
      }

      setRentalDisabledDates(scheduledDatesResponse.unavailable_dates);

      const unavailableDatesWithDisabledProperties = 
        scheduledDatesResponse.unavailable_dates.map(scheduledDay => [scheduledDay, {
        textColor: "#FDEDEF",
        disabled: true,
        inactive: true,
        disableTouchEvent: true
      }]);
  
      const unavailableDatesKeyValueList = Object.fromEntries(unavailableDatesWithDisabledProperties);
      setRentalDisabledDatesWithDisabledProperties(unavailableDatesKeyValueList);
    } catch (error) {
      Alert.alert('Não foi possível carregar os dias que foram agendados.');
      console.error('getScheduledDates', error);
    } finally {
      setIsLoadingScheduledDates(false);
    }
  }

  useEffect(() => {
    getScheduledDates();
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
        
        <RentalPeriod>
          <DateInfo selected={!!rentalPeriod.startFormatted}>
            <DateTitle>de</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo selected={!!rentalPeriod.endFormatted}>
            <DateTitle>ate</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      
      {isLoadingScheduledDates ? (
        <Loader />
      ) : (
        <Content>
          <Calendar
            markedDates={{
              ...markedDates,
              ...rentalDisabledDatesWithDisabledProperties
            }}
            onDayPress={handleChangeDate}
          />
        </Content>
      )}
      
      <Footer>
        <Button
          enabled={!!rentalPeriod.startFormatted && !!rentalPeriod.endFormatted} 
          title="Confirmar agendamento"
          onPress={handleConfirmScheduling}
        />
      </Footer>
    </Container>
  )
}
