import React from 'react';
import {
  ChildrenContainer,
  Container,
  HeaderContainer,
  HeaderTitle,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar, TouchableOpacity } from 'react-native';
//import { useOrientation } from '../../hooks/useOrientation';
import {
  useSafeAreaInsets,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { isIos } from '../../utils/responsive';
import theme from '../../styles/theme';

interface Props {
  children: JSX.Element;
  title: string;
  t_size?: number;
  goBack?: () => void;
  edges?: SafeAreaViewProps['edges'];
  edgesChildren?: SafeAreaViewProps['edges'];
  backgroundColor?: string;
}

const Header = ({
  title,
  goBack,
  children,
  edges = ['top'],
  edgesChildren = ['left', 'right', 'bottom'],
  backgroundColor,
}: Props) => {
  //! Another way to control the pt of the Header
  //const { orientation } = useOrientation();
  const { top } = useSafeAreaInsets();

  return (
    <Container backgroundColor={backgroundColor}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <HeaderContainer
        edges={edges}
        pt={top === 0 && isIos ? 20 : 0} //orientation === 'landscape' && isIos ? 20 : 0
      >
        {goBack && (
          <TouchableOpacity onPress={goBack}>
            <Icon
              name="arrow-back-outline"
              size={40}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        )}
        <HeaderTitle goBack={!!goBack}>{title}</HeaderTitle>
      </HeaderContainer>
      <ChildrenContainer edges={edgesChildren}>{children}</ChildrenContainer>
    </Container>
  );
};

export default Header;
