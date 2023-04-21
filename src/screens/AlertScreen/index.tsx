import React from 'react';
import { Alert, Button } from 'react-native';
import { Container, Spacer } from './style';
import { Navigator } from '../../navigation';
import { Header } from '../../components';

export const AlertScreen = () => {
  const { goBack } = Navigator();

  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      //! Next properties only work for Android
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    //! Prompt only works for IOS, create a custom modal or use a library if needed on both devices
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      (valor: string) => console.log('info: ', valor),
      'plain-text',
      'Hola Mundo',
    );
  };

  return (
    <Header title="Alerts" goBack={goBack}>
      <Container>
        <Button title="Mostrar Alerta" onPress={showAlert} />
        <Spacer />
        <Button title="Mostrar Prompt" onPress={showPrompt} />
      </Container>
    </Header>
  );
};
