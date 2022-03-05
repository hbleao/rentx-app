import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateValue,
  DateTitle,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import { 
  BackButton,
  Button,
  ImageSlider,
  Accessory,
} from '../../components';

import { getAccessoryIcon } from '../../utils';

import { SchedulingDetailsParamsProps } from './types';
import { 
  putSchedulesCarsById,
  registerScheduleByUserId 
} from '../../services';

export const SchedulingDetails = ({ navigation, route }) => {
  const { 
    car, 
    dates, 
    rentalPeriod, 
    rentalDisabledDates
  } = route.params as SchedulingDetailsParamsProps;
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const rentTotal = Object.keys(dates).length * car.price;


  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToNextScreen() {
    navigation.navigate('Home');
  }

  async function handleConfirmRental() {
    try {
      setLoading(true);
      const unavailable_dates = [
        ...Object.keys(dates),
        ...rentalDisabledDates
      ]

      await putSchedulesCarsById({
        id: car.id,
        unavailable_dates
      }); 

      await registerScheduleByUserId({
        user_id: '1',
        car,
        startDate: rentalPeriod.startFormatted,
        endDate: rentalPeriod.endFormatted
      });
  
      navigation.navigate('Complete', {
        title: 'Carro alugado!',
        message: `Agora você só precisa ir {'\n'}
        até a concessionária da RENTX {'\n'}
        pegar seu automóvel`,
        handleGoToNextScreen
      });

    } catch (error) {
      console.error('handleConfirmRental', handleConfirmRental);
      Alert.alert('Não foi possível agendar seu carro.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider 
          imageUrls={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
        {car.accessories.map(accessory => (
            <Accessory 
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(15)}
            color={colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceDetails>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RentalPriceQuota>R$ ${car.price} x{Object.keys(dates).length} diárias</RentalPriceQuota>
          </RentalPriceDetails>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title='Alugar Agora'
          color={colors.shape}
          colorLoader={colors.backgroundSecondary}
          onPress={handleConfirmRental}
          loading={loading}
        />
      </Footer>
    </Container>
  )
}