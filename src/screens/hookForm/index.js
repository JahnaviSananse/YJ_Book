import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {LoginSuccess} from '../../Redux/Actions/Auth.actions/Auth.actions';
export default function hookForm() {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const DataItem = useSelector(state => state.Auth.Data);

  const onSubmit = data => {
    console.log('data>>>>>>>>', data);
    dispatch(LoginSuccess(data));
  };

  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="EmailID"
          />
        )}
        name="email"
        rules={{
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
        }}
        defaultValue=""
      />
      {errors.email?.type == 'required' && (
        <Text style={{color: 'red'}}>This is required.</Text>
      )}
      {errors.email?.type == 'pattern' && (
        <Text style={{color: 'red'}}>Enter valid Email.</Text>
      )}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Password"
          />
        )}
        name="password"
        rules={{
          required: true,
          minLength: 6,
        }}
        defaultValue=""
      />
      {console.log('jvjhvjh', errors)}
      {errors.password?.type == 'required' && (
        <Text style={{color: 'red'}}>This is required.</Text>
      )}
      {errors.password?.type == 'minLength' && (
        <Text style={{color: 'red'}}>Minimum 6 characters are required</Text>
      )}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      {DataItem.map(value => {
        return (
          <>
            <View>
              <Text> {value?.email}</Text>
              <Text> {value?.password}</Text>
            </View>
          </>
        );
      })}

      {/* <Text> {DataItem[0]?.email}</Text>
      <Text> {DataItem[0]?.password}</Text>
      <Text> {DataItem[1]?.email}</Text>
      <Text> {DataItem[1]?.password}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
