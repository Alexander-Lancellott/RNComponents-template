import React from 'react';
import { Container, SkyBlueBox, Main } from './style';
import { useAnimation } from '../../hooks/useAnimation';
import { Header } from '../../components';
import { Navigator } from '../../navigation';

export const Animation2Screen = () => {
  const { panResponder, pan } = useAnimation();
  const { goBack } = Navigator();

  return (
    <Header title="Animation 2" goBack={goBack}>
      <Container>
        <Main>
          <SkyBlueBox
            {...panResponder.panHandlers}
            style={{
              transform: pan.getTranslateTransform(),
            }}
          />
        </Main>
      </Container>
    </Header>
  );
};
