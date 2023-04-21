import styled from 'styled-components/native';
import { View, ViewStyle, Text, TextStyle } from 'react-native';
import { StyleType } from '../../utils';
import theme from '../../styles/theme';

export const Container = styled(View)(
  StyleType<ViewStyle>({
    flexDirection: 'row',
    alignItems: 'center',
  }),
);

export const Spacer = styled(View)(
  StyleType<ViewStyle>({
    flex: 1,
  }),
);

export const ItemText = styled(Text)(
  StyleType<TextStyle>({ marginLeft: 10, fontSize: theme.fontSizes.base }),
);
