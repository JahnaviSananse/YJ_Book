import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import TextField from '../../components/TextFied/TextFied.index';
import {IMAGE} from '../../assets/images/images';
import Button from '../../components/Button/Button.index';
import styles from './style';
const Setting = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <>
      <Image style={styles.stretch} source={IMAGE.LION} />
      <View style={{borderBottomWidth: 2, borderBottomColor: 'black'}}></View>
      <TextField title="Full Name" placeholder="your name please ..." />
      <TextField title="Email ID" placeholder="abc@gmail.com" />
      <TextField
        title="Phone Number"
        placeholder="your contact number please ..."
      />
      <TextField title="Location" placeholder="your loacation please ..." />
      <View style={{flexDirection: 'row'}}>
        <Button title="Birth Date" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <Button title="CONFIRM" type="fill" />
    </>
  );
};

export default Setting;
