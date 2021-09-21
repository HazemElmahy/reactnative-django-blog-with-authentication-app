import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const NavLink = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(props.link)}>
      <Text style={styles.login__link}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  login__link: {
    color: '#46f',
  },
});
export default NavLink;
