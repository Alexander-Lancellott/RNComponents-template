import { useState } from 'react';

export const useForm = <T,>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = <K,>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};
