import React, {useRef} from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import Footer from '../components/Footer';

import Page from '../components/Page';

const Onboarding = ({navigation}) => {
  const pagerRef = useRef(null);

  const pageHandle = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  return (
    <View style={{flex: 1}}>
      <PagerView style={{flex: 1}} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#ffc93c"
            iconName="friendship.png"
            title="Welcome to YJ Group"
          />
          <Footer
            backgroundColor="#ffc93c"
            rightButtonLabel="Next"
            rightButtonPress={() => pageHandle(1)}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="purple"
            iconName="friendship.png"
            title="This is Yash"
          />
          <Footer
            backgroundColor="purple"
            leftButtonLabel="Back"
            leftButtonPress={() => pageHandle(0)}
            rightButtonLabel="Next"
            rightButtonPress={() => pageHandle(2)}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="grey"
            iconName="friendship.png"
            title="This is Jahnavi"
          />
          <Footer
            backgroundColor="grey"
            leftButtonLabel="Back"
            leftButtonPress={() => pageHandle(1)}
            rightButtonLabel="Next"
            rightButtonPress={() => navigation.navigate('Home')}
          />
        </View>
      </PagerView>
    </View>
  );
};

export default Onboarding;
