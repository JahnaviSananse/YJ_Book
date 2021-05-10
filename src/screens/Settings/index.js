import React, {useState} from 'react';

import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';

import styles from './style';
const Setting = () => {
  const [on, setOn] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View>
        <TouchableOpacity onPress={() => openDrawer()}>
          <Text style={styles.title}>Your content</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet isOpen={on}>
        {onScrollEndDrag => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            {[...Array(10)].map((_, index) => (
              <View key={`${index}`}>
                <Text style={{fontSize: 32}}>{`List Item ${index + 1}`}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </BottomSheet>
    </View>
  );
};

export default Setting;
