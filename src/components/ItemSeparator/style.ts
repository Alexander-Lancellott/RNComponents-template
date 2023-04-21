import styled from 'styled-components/native';
import { View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';

export const Line = styled(View)(
  ({ color, w }: { color: string; w?: number }) =>
    StyleType<ViewStyle>({
      width: w,
      borderColor: color,
      borderBottomWidth: 2,
      marginVertical: 8,
    }),
);
