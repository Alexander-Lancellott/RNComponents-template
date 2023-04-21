import styled from 'styled-components/native';
import { View, ViewStyle, Animated } from 'react-native';
import { StyleType } from '../../utils';
import theme from '../../styles/theme';

type AnimatedView = Animated.AnimatedProps<ViewStyle>;

export const Main = styled(View)(
  StyleType<ViewStyle>({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const Container = styled(View)(
  StyleType<ViewStyle>({
    flex: 1,
  }),
);

export const PurpleBox = styled(Animated.View)(
  StyleType<AnimatedView>({
    backgroundColor: theme.colors.primary,
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 8,
  }),
);

export const Spacer = styled(View)(
  StyleType<ViewStyle>({
    marginTop: 5,
  }),
);
