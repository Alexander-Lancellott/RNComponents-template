import React from 'react';
import { Container, PurpleBox, Main, Spacer } from './style';
import { Button } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { Header } from '../../components';
import { Navigator } from '../../navigation';
import { View } from 'react-native';
import theme from '../../styles/theme';

export const Animation1Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMovingPosition } =
    useAnimation();
  const { goBack } = Navigator();

  return (
    <Header title="Animation 1" goBack={goBack}>
      <Container>
        <Main>
          <PurpleBox
            style={[
              {
                opacity,
                transform: [{ translateY: position }],
              },
              theme.styles.shadow_xl,
            ]}
          />
          <View>
            <Button
              title="FadeIn"
              onPress={() => {
                fadeIn();
                startMovingPosition({ initPosition: -100 });
              }}
            />
            <Spacer />
            <Button title="FadeOut" onPress={fadeOut} />
          </View>
        </Main>
      </Container>
    </Header>
  );
};
