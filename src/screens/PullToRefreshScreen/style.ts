import styled from 'styled-components/native';
import { RefreshControl, Text, TextStyle, View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';
import theme from '../../styles/theme';
import { isIos } from '../../utils/responsive';

export const Main = styled(View)(
  StyleType<ViewStyle>({
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  }),
);

export const RefreshStyled = styled(RefreshControl)(
  StyleType<ViewStyle>({
    display: isIos ? 'none' : 'flex',
    backgroundColor: isIos ? theme.colors.primary : undefined,
  }),
);

export const TextStyled = styled(Text)(
  StyleType<TextStyle>({
    fontSize: theme.fontSizes.md,
  }),
);
