import React from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './style';

const Home = () => {
  const DATA = [
    {
      id: 1,
      title: 'First',
    },
    {
      id: 2,
      title: 'Second ',
    },
    {
      id: 3,
      title: 'Third ',
    },
    {
      id: 4,
      title: 'Fourth ',
    },
    {
      id: 5,
      title: 'Fifth ',
    },
    {
      id: 6,
      title: 'Sixth ',
    },
    {
      id: 7,
      title: 'Seventh ',
    },
    {
      id: 8,
      title: 'Eigth ',
    },
    {
      id: 9,
      title: 'Ninth ',
    },
    {
      id: 10,
      title: 'Tenth ',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <View>
          <Text style={styles.title}> {item.title} </Text>
          <View style={styles.border}></View>
        </View>
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

export default Home;
