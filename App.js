import React from 'react';
import {View} from 'react-native';
import {AppNavigator} from './src/navigation/App.navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;
