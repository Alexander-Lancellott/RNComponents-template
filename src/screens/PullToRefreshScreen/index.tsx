import React, { useState } from 'react';
import { Main, RefreshStyled, TextStyled } from './style';
import { Header } from '../../components';
import { Navigator } from '../../navigation';
import theme from '../../styles/theme';
import { ScrollView } from 'react-native';

export const PullToRefreshScreen = () => {
  const { goBack } = Navigator();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };

  return (
    <Header title="Pull To Refresh" goBack={goBack}>
      <ScrollView
        refreshControl={
          <RefreshStyled
            refreshing={refreshing}
            onRefresh={onRefresh}
            //progressViewOffset={10}
            progressBackgroundColor={theme.colors.primary}
            colors={[theme.colors.secondary]}
            tintColor={theme.colors.secondary}
          />
        }
      >
        <Main>{data && <TextStyled>{data}</TextStyled>}</Main>
      </ScrollView>
    </Header>
  );
};
