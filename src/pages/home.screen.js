import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Button
        title="Drawer Navigator"
        onPress={() => props.navigation.navigate('Drawer')}
      />
      <Button
        title="Tab Navigator"
        onPress={() => props.navigation.navigate('Tab')}
      />
    </View>
  );
};

export default HomeScreen;
