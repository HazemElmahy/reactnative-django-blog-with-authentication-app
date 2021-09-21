import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Account Screen</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.button__text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  button: {
    borderWidth: 3,
    borderColor: '#000',
    margin: 30,
    padding: 15,
  },
  button__text: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default AccountScreen;
