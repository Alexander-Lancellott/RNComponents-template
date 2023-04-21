import styled from 'styled-components/native';
import { View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';

export const Spacer = styled(View)(
  StyleType<ViewStyle>({
    marginTop: 5,
  }),
);

export const Container = styled(View)(
  StyleType<ViewStyle>({
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  }),
);
