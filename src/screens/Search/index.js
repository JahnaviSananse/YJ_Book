import React, {useRef} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';
import RBSheet from 'react-native-raw-bottom-sheet';
export default function Search() {
  const refRBSheet = useRef();
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
      title: <Image style={styles.stretch} source={IMAGE.LION} />,
    },
    {
      id: 7,
      title: <Image style={styles.stretch} source={IMAGE.ELEPHANT} />,
    },
    {
      id: 8,
      title: <Image style={styles.stretch} source={IMAGE.SQUIRAL} />,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity onPress={() => alert(item.id)}>
          <View>{item.title}</View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Button title="SHARE WITH" onPress={() => refRBSheet.current.open()} />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <FlatList
          // horizontal
          numColumns={4}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  stretch: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    // resizeMode: 'stretch',
  },
});
