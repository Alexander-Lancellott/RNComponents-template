import styled from 'styled-components/native';
import { Text, View, ViewStyle, TextStyle } from 'react-native';
import { StyleType } from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../styles/theme';

export const Container = styled(View)(
  ({ backgroundColor }: { backgroundColor?: string }) =>
    StyleType<ViewStyle>({
      flex: 1,
      overflow: 'hidden',
      backgroundColor,
    }),
);

export const HeaderContainer = styled(SafeAreaView)(({ pt }: { pt: number }) =>
  StyleType<ViewStyle>({
    backgroundColor: theme.colors.primary,
    paddingTop: pt,
    paddingBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    alignContent: 'space-between',
  }),
);

export const ChildrenContainer = styled(SafeAreaView)(
  StyleType<ViewStyle>({
    flex: 1,
  }),
);

export const HeaderTitle = styled(Text)(({ goBack }: { goBack: boolean }) =>
  StyleType<TextStyle>({
    flex: 1,
    right: goBack ? '40%' : 0,
    fontSize: goBack ? theme.fontSizes.lg : theme.fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.secondary,
  }),
);
