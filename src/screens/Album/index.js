import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';

const Album = () => {
  const DATA = [
    {
      id: 1,
      title: <Image style={styles.stretch} source={IMAGE.NATURE} />,
    },
    {
      id: 2,
      title: <Image style={styles.stretch} source={IMAGE.DOGGIES} />,
    },
    {
      id: 3,
      title: <Image style={styles.stretch} source={IMAGE.LION} />,
    },
    {
      id: 4,
      title: <Image style={styles.stretch} source={IMAGE.ELEPHANT} />,
    },
    {
      id: 5,
      title: <Image style={styles.stretch} source={IMAGE.SQUIRAL} />,
    },
    {
      id: 6,
      title: <Image style={styles.stretch} source={IMAGE.NATURE} />,
    },
    {
      id: 7,
      title: <Image style={styles.stretch} source={IMAGE.LION} />,
    },
    {
      id: 8,
      title: <Image style={styles.stretch} source={IMAGE.SQUIRAL} />,
    },
    {
      id: 9,
      title: <Image style={styles.stretch} source={IMAGE.DOGGIES} />,
    },
    {
      id: 10,
      title: <Image style={styles.stretch} source={IMAGE.ELEPHANT} />,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <View>{item.title}</View>
        <View style={{borderBottomWidth: 2, margin: 5}} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  stretch: {
    width: '100%',
    height: 200,
    // resizeMode: 'stretch',
  },
});

export default Album;
