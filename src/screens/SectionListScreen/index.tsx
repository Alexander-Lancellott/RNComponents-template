import React from 'react';
import { Container, SectionFooter, TextStyled } from './style';
import { Header, ItemSeparator } from '../../components';
import { Navigator } from '../../navigation';
import { SectionList } from 'react-native';
import { casas } from '../../data/casas';
import { ListFooter } from './style';
import { SectionHeader } from './style';
import theme from '../../styles/theme';

export const SectionListScreen = () => {
  const { goBack } = Navigator();

  return (
    <Header title="Section List" goBack={goBack}>
      <Container>
        <SectionList
          sections={casas}
          keyExtractor={(item, index) => item + index}
          ListFooterComponent={
            <ListFooter>
              <TextStyled fw="bold">{`Total de casas ${casas.length}`}</TextStyled>
            </ListFooter>
          }
          renderItem={({ item }) => <TextStyled>{item}</TextStyled>}
          stickySectionHeadersEnabled
          renderSectionHeader={({ section }) => (
            <SectionHeader>
              <TextStyled
                fw="bold"
                color={theme.colors.primary}
                size={theme.fontSizes.lg}
              >
                {section.casa}
              </TextStyled>
            </SectionHeader>
          )}
          renderSectionFooter={({ section }) => (
            <SectionFooter>
              <TextStyled fw="600">
                {`  Total: ${section.data.length}`}
              </TextStyled>
            </SectionFooter>
          )}
          SectionSeparatorComponent={() => ItemSeparator({})}
          ItemSeparatorComponent={() => ItemSeparator({})}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Header>
  );
};
