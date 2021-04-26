import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Page</Text>
      <Home />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
export default App;
