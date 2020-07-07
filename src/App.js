import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './Pages/SampleComponent';
import StylingComponent from './Pages/StylingComponent';
import FlexBox from './Pages/FlexBox';
import Position from './Pages/Position';
import PropsDinamis from './Pages/PropsDinamis';

const App = () => {
  return (
    <View>
      <ScrollView> 
        {/* <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position /> */}
        <PropsDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
