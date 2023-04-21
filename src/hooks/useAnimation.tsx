import { useRef } from 'react';
import { Animated, PanResponder, Easing } from 'react-native';

interface MovingPosition {
  initPosition: number;
  duration?: number;
  bounce?: boolean;
}

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }, // prevent missing parameter warning
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: true }, // Back to zero
      ).start();
    },
  });

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('La animacion termino'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = ({
    initPosition,
    duration = 300,
    bounce = true,
  }: MovingPosition) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: bounce ? Easing.bounce : undefined,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    startMovingPosition,
    panResponder,
    opacity,
    position,
    pan,
  };
};
