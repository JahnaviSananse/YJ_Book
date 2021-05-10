import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';
import RBSheet from 'react-native-raw-bottom-sheet';

const Album = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
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
  const forLike = () => {
    if (dislike) {
      setDislike(false);
    }
    setLike(!like);
    // refRBSheet.current.close();
  };
  const forDislike = () => {
    if (like) {
      setLike(false);
    }
    setDislike(!dislike);
  };
  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View>{item.title}</View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 2, margin: 5}} />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={100}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: 'black',
            },
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={() => forLike()}>
              <Image
                style={styles.hit}
                source={like ? IMAGE.LIKEFILL : IMAGE.LIKE}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => forDislike()}>
              <Image
                style={styles.hit}
                source={dislike ? IMAGE.DISLIKEFILL : IMAGE.DISLIKE}
              />
            </TouchableOpacity>
          </View>
        </RBSheet>
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
  hit: {
    width: 50,
    height: 50,
  },
});

export default Album;
