import React from 'react';
import { MenuItemInterface } from '../../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, ItemText, Spacer } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Navigator } from '../../navigation';
import theme from '../../styles/theme';

interface Props {
  menuItem: MenuItemInterface;
}

const MenuItem = ({ menuItem }: Props) => {
  const { goToPage } = Navigator();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => goToPage(menuItem.component)}
    >
      <Container>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={23} />
        <ItemText>{menuItem.name}</ItemText>
        <Spacer />
        <Icon
          name="chevron-forward-outline"
          color={theme.colors.primary}
          size={23}
        />
      </Container>
    </TouchableOpacity>
  );
};
export default MenuItem;
