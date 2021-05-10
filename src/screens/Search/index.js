import React from 'react';
import Button from '../../components/Button/Button.index';
import TextField from '../../components/TextFied/TextFied.index';
const Search = () => {
  return (
    <>
      <TextField title={'Search Item'} placeholder={'Enter Your Item Here'} />
      <Button title="SEARCH" />
    </>
  );
};
export default Search;
