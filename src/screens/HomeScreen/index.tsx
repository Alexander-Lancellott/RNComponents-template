import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import { MenuItem, Header, ItemSeparator } from '../../components';
import { menuItems } from '../../data/menuItems';
import theme from '../../styles/theme';

export const HomeScreen = () => {
  return (
    <Header title="Opciones de Menu">
      <Container>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => <MenuItem menuItem={item} />}
          //ListHeaderComponent={}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={() => ItemSeparator({})}
          contentContainerStyle={theme.styles.homePaddingBottom}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Header>
  );
};
