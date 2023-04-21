import { useState } from 'react';
import { Dimensions } from 'react-native';
import { isPortrait } from '../utils/dimensions';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    isPortrait() ? 'portrait' : 'landscape',
  );

  Dimensions.addEventListener('change', () =>
    setOrientation(isPortrait() ? 'portrait' : 'landscape'),
  );

  return { orientation };
};
