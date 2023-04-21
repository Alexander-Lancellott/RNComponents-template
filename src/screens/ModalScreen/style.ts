import styled from 'styled-components/native';
import { Pressable, Text, TextStyle, View, ViewStyle } from 'react-native';
import { StyleType } from '../../utils';
import theme from '../../styles/theme';

interface TextStyledProps {
  size?: number;
  color?: string;
  fw?: TextStyle['fontWeight'];
  mb?: number;
}

export const Container = styled(View)(
  StyleType<ViewStyle>({
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  }),
);

export const ModalBackground = styled(Pressable)(
  StyleType<ViewStyle>({
    flex: 1,
    backgroundColor: theme.colors.black,
    opacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

export const ModalContainer = styled(View)(
  StyleType<ViewStyle>({
    flex: 1,
    justifyContent: 'center',
  }),
);

export const ModalBody = styled(View)(
  StyleType<ViewStyle>({
    position: 'absolute',
    alignSelf: 'center',
    width: 200,
    height: 200,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
);

export const TextStyled = styled(Text)(
  ({ size = theme.fontSizes.base, color, fw, mb }: TextStyledProps) =>
    StyleType<TextStyle>({
      fontSize: size,
      color: color,
      fontWeight: fw,
      marginBottom: mb,
    }),
);
