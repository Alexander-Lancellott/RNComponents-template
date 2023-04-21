import styled from 'styled-components/native';
import {
  View,
  ViewStyle,
  Animated,
  TextInput,
  TextStyle,
  Text,
  ScrollView,
} from 'react-native';
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

export const Container = styled(ScrollView)(
  StyleType<ViewStyle>({
    height: 0,
    marginHorizontal: 20,
  }),
);

export const Input = styled(TextInput)(
  StyleType<AnimatedView>({
    borderWidth: 1,
    borderColor: theme.colors.grey,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  }),
);

export const SwitchRow = styled(View)(
  StyleType<ViewStyle>({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  }),
);

export const SwitchText = styled(Text)(
  StyleType<TextStyle>({
    fontSize: theme.fontSizes.md,
  }),
);
