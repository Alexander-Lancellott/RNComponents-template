import React from 'react';
import { Switch } from 'react-native-gesture-handler';
import { isAndroid } from '../../utils/responsive';
import theme from '../../styles/theme';

interface Props {
  isEnabled: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isEnabled, onChange }: Props) => {
  const toggleSwitch = () => {
    onChange(!isEnabled);
  };
  return (
    <Switch
      trackColor={{
        false: theme.colors.disable,
        true: theme.colors.primary,
      }}
      thumbColor={isAndroid ? theme.colors.white : ''}
      //ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
