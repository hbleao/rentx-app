import React, { useRef, useState } from "react";
import { FlatList } from "react-native";
import { Bullet } from "../Bullet";

import { 
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from "./styles";

import { ImageSliderProps, ChangeImageProps } from "./types";

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imageUrls.map((item, index) => (
          <Bullet 
            key={item.id} 
            active={imageIndex === index}
          />
        ))}
      </ImageIndexes>

      <FlatList 
        data={imageUrls}
        keyExtractor={key => key.id}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage 
              source={{ uri: item.photo}}
              resizeMode='contain'
            />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  )
}
