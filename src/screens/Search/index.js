import React, {useRef} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextComponent,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
export default function Search() {
  const refRBSheet = useRef();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />

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
        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <Text style={{fontSize: 30}}> hi </Text>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
}
