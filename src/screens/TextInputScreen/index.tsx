import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, View } from 'react-native';
import { Container, Input, SwitchText, SwitchRow } from './style';
import { Navigator } from '../../navigation';
import { CustomSwitch, Header } from '../../components';
import { useForm } from '../../hooks/useForm';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { isIos } from '../../utils/responsive';
import theme from '../../styles/theme';

export const TextInputScreen = () => {
  const { goBack } = Navigator();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <Header title="TextInputs" goBack={goBack}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        containerStyle={theme.styles.keyboardDismissStyle}
        style={theme.styles.keyboardDismissStyle}
      >
        <Container showsVerticalScrollIndicator={false}>
          <View>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={isIos ? 140 : 180}
            >
              <Input
                placeholder="Ingrese su nombre"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(value: string) => onChange(value, 'name')}
              />
              <Input
                placeholder="Ingrese su email"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(value: string) => onChange(value, 'email')}
                keyboardType="email-address"
                keyboardAppearance="dark"
              />
              <Input
                placeholder="Ingrese su teléfono"
                onChangeText={(value: string) => onChange(value, 'phone')}
                keyboardType="phone-pad"
              />
              <SwitchRow>
                <SwitchText>Suscribirse:</SwitchText>
                <CustomSwitch
                  isEnabled={isSubscribed}
                  onChange={(value: boolean) => setIsSubscribed(value)}
                />
              </SwitchRow>

              <SwitchText>
                {JSON.stringify({ form, isSubscribed }, null, 5)}
              </SwitchText>
            </KeyboardAvoidingView>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </Header>
  );
};
