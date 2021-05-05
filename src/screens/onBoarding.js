import React from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';

import Page from '../components/Page';

const Onboarding = () => {
  return (
    <View style={{flex: 1}}>
      <PagerView style={{flex: 1}}>
        <View key="1">
          <Page
            backgroundColor="#ffc93c"
            iconName="friendship.png"
            title="Welcome to the weather app"
          />
        </View>
      </PagerView>
    </View>
  );
};

export default Onboarding;

// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import PagerView from 'react-native-pager-view';

// const Onboarding = () => {
//   return (
//     <PagerView style={styles.pagerView} initialPage={0}>
//       <View key="1">
//         <Text>First page</Text>
//       </View>
//       <View key="2">
//         <Text>Second page</Text>
//       </View>
//     </PagerView>
//   );
// };

// const styles = StyleSheet.create({
//   pagerView: {
//     flex: 1,
//   },
// });

// export default Onboarding;
