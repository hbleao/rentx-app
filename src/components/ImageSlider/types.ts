import { ViewToken } from 'react-native';

export type ImageSliderProps = {
  imageUrls: {
    id: string;
    photo: string;
  }[];
}

export type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
