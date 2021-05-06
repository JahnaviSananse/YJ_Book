import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Page = ({backgroundColor, iconName, title}) => {
  const img = `../assets/images` + {iconName};
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      }}>
      <Image style={styles.stretch} source={iconName} />
      <View style={{marginTop: 16}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          {title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});

export default Page;
