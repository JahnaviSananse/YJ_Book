import {useState} from 'react';

export const useAuthHook = initialData => {
  const [data, setData] = useState(initialData);
  // {email : '' , password:'' , name : ''}
  //onChange = {(text)=>setData(text)}
  const onChange = (name, value) => {
    let obj = {};
    obj[name] = value;
    console.log('obj>>>', obj);
    // name : 'abc'
    // email : 'dcdcdcsd'
    // pass : 'ddcsdcd'
    setData({...data, ...obj});
  };

  const onNext = (navigation, destination) => {
    navigation.navigate(destination);
  };

  return {data, onChange, onNext};
};
