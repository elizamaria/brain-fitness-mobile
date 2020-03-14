import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Navigator from './src/navigation/rootNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container} >
          <Navigator />
        </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
