import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const AuthInput = ({labels, textChanged}) => {
  return (
    <View>
      <Text style={styles.input__text}>{labels.inputtext}</Text>
      <TextInput
        style={styles.input__input}
        placeholder={labels.input}
        label={labels.input}
        value={labels.value}
        onChangeText={textChanged}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={labels.isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input__text: {
    margin: 3,
    marginBottom: 5,
    fontSize: 15,
  },
  input__input: {
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
    padding: 10,
  },
});

export default AuthInput;
