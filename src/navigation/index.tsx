import { CommonActions, useNavigation } from '@react-navigation/native';
import ROUTES, { Routes } from './Routes';

export const Navigator = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const goToPage = (name: Routes, params = {}) => {
    navigation.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  };

  return { goBack, goToPage };
};

export default { Navigator, ROUTES };
