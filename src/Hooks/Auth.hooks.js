import {useState} from 'react';

export const useAuthHook = initialData => {
  const [data, setData] = useState(initialData);

  const onChange = (item, value) => {
    let obj = {};
    obj[item] = value;
    setData({...data, ...obj});
  };

  const onNext = (navigation, destination) => {
    navigation.navigate(destination);
  };

  return {data, onChange, onNext};
};
