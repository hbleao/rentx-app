import React from 'react';
import { render } from '@testing-library/react-native';

import { BackButton } from '.';

type MakeSutProps = {
  color?: string;
  onPress?: () => {};
}

const makeSut = ({
  color = '#00ff00',
  onPress = () => null
}: MakeSutProps) => {
  const sut = render(
    <BackButton
      color={color}
      onPress={onPress}
    />
  );

  return {
    sut
  }
}

describe('BackButton', () => {
  it('should be able to render correctly', () => {
    const { sut } = makeSut({});

    sut.debug();
  });
});
