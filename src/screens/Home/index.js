import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';
// import {useNavigation} from '@react-navigation/native';

const Home = ({navigation}) => {
  // const navigation = useNavigation();

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
      head: 'Click here to go to Natural',
    },
    {
      id: 7,
      head: 'Click here to go to Squiral',
    },
    {
      id: 8,
      head: 'Click here to go to Doggie',
    },
    {
      id: 9,
      head: 'Click here to go to Elephant',
    },
    {
      id: 10,
      head: 'Click here to go to Lion',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        {/* <TouchableOpacity onPress={() => alert(item.id)}> */}
        <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
          <View>{item.title}</View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TextFile')}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{item.head}</Text>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 2, marginBottom: 10}} />
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

export default Home;
