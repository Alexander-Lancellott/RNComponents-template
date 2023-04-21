import styled from 'styled-components/native';
import {
  View,
  ViewStyle,
  ActivityIndicator,
  Animated,
  ImageStyle,
} from 'react-native';
import { StyleType } from '../../utils';

type AnimatedImage = Animated.AnimatedProps<ImageStyle>;

export const Container = styled(View)(
  StyleType<ViewStyle>({
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const Loading = styled(ActivityIndicator)(
  StyleType<ViewStyle>({
    position: 'absolute',
  }),
);

export const AnimatedImageStyled = styled(Animated.Image)(
  StyleType<AnimatedImage>({
    width: '100%',
    height: 400,
  }),
);
