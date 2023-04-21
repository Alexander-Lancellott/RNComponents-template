import { StyleSheet } from 'react-native';

const colors = {
  primary: '#5856D6',
  secondary: '#F2F2F2',
  disable: '#D9D9DB',
  white: '#ffffff',
  black: '#000000',
  grey: '#808080',
  skyBlue: '#75CDEB',
};

const fontSizes = {
  sm: 16,
  base: 20,
  md: 25,
  lg: 30,
  xl: 35,
};

export const styles = StyleSheet.create({
  //! Prevent Styled Component Warnings with shadows
  shadow_xl: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  homePaddingBottom: {
    paddingBottom: 70,
  },
  keyboardDismissStyle: {
    flex: 1,
  },
});

export default {
  fontSizes,
  colors,
  styles,
};
