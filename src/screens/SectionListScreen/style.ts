import styled from 'styled-components/native';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';
import theme from '../../styles/theme';

interface TextStyledProps {
  size?: number;
  color?: string;
  fw?: TextStyle['fontWeight'];
}

export const Container = styled(View)(
  StyleType<ViewStyle>({
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  }),
);

export const ListFooter = styled(View)(
  StyleType<ViewStyle>({
    marginTop: 10,
    marginBottom: 70,
  }),
);

export const SectionFooter = styled(View)(
  StyleType<ViewStyle>({
    paddingVertical: 10,
  }),
);

export const SectionHeader = styled(View)(
  StyleType<ViewStyle>({
    paddingVertical: 10,
    backgroundColor: theme.colors.secondary,
  }),
);

export const TextStyled = styled(Text)(
  ({ size = theme.fontSizes.md, color, fw }: TextStyledProps) =>
    StyleType<TextStyle>({
      fontSize: size,
      color: color,
      fontWeight: fw,
    }),
);
