import React, { useState } from 'react';
import {
  Container,
  ModalBackground,
  ModalBody,
  ModalContainer,
  TextStyled,
} from './style';
import { Header } from '../../components';
import { Navigator } from '../../navigation';
import { Button, Modal } from 'react-native';
import theme from '../../styles/theme';

export const ModalScreen = () => {
  const { goBack } = Navigator();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Header title="Modal" goBack={goBack}>
      <Container>
        <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

        <Modal animationType="fade" visible={isVisible} transparent={true}>
          <ModalContainer>
            {/* Background negro */}
            <ModalBackground onPress={() => setIsVisible(false)} />
            {/* Contenido del modal */}
            <ModalBody style={theme.styles.shadow_xl}>
              <TextStyled fw="bold">Modal</TextStyled>
              <TextStyled fw="300" mb={20} size={theme.fontSizes.sm}>
                Cuerpo del modal
              </TextStyled>
              <Button title="Cerrar" onPress={() => setIsVisible(false)} />
            </ModalBody>
          </ModalContainer>
        </Modal>
      </Container>
    </Header>
  );
};
