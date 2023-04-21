import React, { useState } from 'react';
import { Animated, ImageStyle } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { AnimatedImageStyled, Container, Loading } from './style';
import theme from '../../styles/theme';

type AnimatedImage = Animated.AnimatedProps<ImageStyle>;

interface Props {
  uri: string;
  imageStyle?: AnimatedImage;
}

const FadeInImage = ({ uri, imageStyle = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <Container>
      {isLoading && <Loading color={theme.colors.primary} size="large" />}

      <AnimatedImageStyled
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{
          ...(imageStyle as AnimatedImage),
          opacity,
        }}
      />
    </Container>
  );
};

export default FadeInImage;
