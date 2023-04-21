import styled from 'styled-components/native';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

export const Container = styled(ScrollView)(
  StyleType<ViewStyle>({
    flex: 1,
  }),
);

export const Main = styled(View)(
  StyleType<ViewStyle>({
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
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
