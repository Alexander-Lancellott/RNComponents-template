import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  HomeScreen,
  Animation1Screen,
  Animation2Screen,
  SwitchScreen,
  AlertScreen,
  TextInputScreen,
  PullToRefreshScreen,
  SectionListScreen,
  ModalScreen,
  InfiniteScrollScreen,
} from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="ANIMATION1_SCREEN" component={Animation1Screen} />
        <Stack.Screen name="ANIMATION2_SCREEN" component={Animation2Screen} />
        <Stack.Screen name="SWITCH_SCREEN" component={SwitchScreen} />
        <Stack.Screen name="ALERT_SCREEN" component={AlertScreen} />
        <Stack.Screen name="TEXTINPUT_SCREEN" component={TextInputScreen} />
        <Stack.Screen
          name="PULL_TO_REFRESH_SCREEN"
          component={PullToRefreshScreen}
        />
        <Stack.Screen
          name="SECTION_LIST_SCREEN"
          component={SectionListScreen}
        />
        <Stack.Screen name="MODAL_SCREEN" component={ModalScreen} />
        <Stack.Screen
          name="INFINITESCROLL_SCREEN"
          component={InfiniteScrollScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
