import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

export default () => {
  const {tryLocalLogin} = useContext(AuthContext);

  useEffect(() => {
    tryLocalLogin();
  }, []);
  return (
    <View style={styles.loading}>
      <Text style={styles.loading__text}>LOADING...</Text>
    </View>
  );
};

styles = StyleSheet.create({
  loading: {
    backgroundColor: '#00000022',
    borderColor: '#000',
    borderWidth: 3,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading__text: {
    fontSize: 40,
  },
});
