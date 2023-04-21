import React, { useState } from 'react';
import { Container } from './style';
import { FadeInImage, Header } from '../../components';
import { Navigator } from '../../navigation';
import { FlatList } from 'react-native';
import theme from '../../styles/theme';

export const InfiniteScrollScreen = () => {
  const { goBack } = Navigator();
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return <FadeInImage uri={`https://picsum.photos/id/${item}/1024/1024`} />;

    // <Image
    //     source={{ uri: `https://picsum.photos/id/${ item }/500/400` }}
    //     style={{
    //         width: '100%',
    //         height: 400
    //     }}
    // />
  };

  return (
    <Header
      title="InfiniteScroll"
      goBack={goBack}
      backgroundColor={theme.colors.black}
      edgesChildren={['left', 'right']}
    >
      <Container>
        <FlatList
          data={numbers}
          keyExtractor={item => item.toString()}
          renderItem={({ item }) => renderItem(item)}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
        />
      </Container>
    </Header>
  );
};
