import React, { useState } from 'react';
import { Container, Main, SwitchRow, SwitchText } from './style';
import { CustomSwitch, Header } from '../../components';
import { Navigator } from '../../navigation';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const { isActive, isHungry, isHappy } = state;

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const { goBack } = Navigator();
  return (
    <Header title="Switch" goBack={goBack}>
      <Container bounces={false}>
        <Main>
          <SwitchRow>
            <SwitchText>isActive</SwitchText>
            <CustomSwitch
              isEnabled={isActive}
              onChange={value => onChange(value, 'isActive')}
            />
          </SwitchRow>
          <SwitchRow>
            <SwitchText>isHungry</SwitchText>
            <CustomSwitch
              isEnabled={isHungry}
              onChange={value => onChange(value, 'isHungry')}
            />
          </SwitchRow>
          <SwitchRow>
            <SwitchText>isHappy</SwitchText>
            <CustomSwitch
              isEnabled={isHappy}
              onChange={value => onChange(value, 'isHappy')}
            />
          </SwitchRow>
          <SwitchText>{JSON.stringify(state, null, 5)}</SwitchText>
        </Main>
      </Container>
    </Header>
  );
};
