import { Alert } from 'react-native';
import * as Yup from 'yup';

export function errorMessage({
  error,
  message
}: any) {
  if (error instanceof Yup.ValidationError) {
    Alert.alert('Opa... ', error.message);
    console.log('Log: error', error);
  } else {
    Alert.alert(message);
    console.log('Log: error', error);
  }
}
