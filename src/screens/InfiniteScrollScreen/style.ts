import styled from 'styled-components/native';
import { View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';

export const Container = styled(View)(
  StyleType<ViewStyle>({
    flex: 1,
  }),
);
