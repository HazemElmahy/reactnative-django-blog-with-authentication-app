import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthInput from '../components/AuthInput';
import NavLink from '../components/NavLink';

const LoginScreen = ({navigation}) => {
  const {state, login, clearErrorMessage} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      clearErrorMessage();
    });
    return listener;
  }, [navigation]);
  return (
    <View style={styles.login}>
      <Text style={styles.login__title}>Please Login To continue</Text>
      <AuthInput
        labels={{
          inputtext: 'Enter your username: ',
          input: 'username',
          value: username,
          isPassword: false,
        }}
        textChanged={setUsername}
      />
      <AuthInput
        labels={{
          inputtext: 'Enter your password: ',
          input: 'password',
          value: password,
          isPassword: true,
        }}
        textChanged={setPassword}
      />
      {state.errorMessage ? (
        <Text style={styles.login_error}>{state.errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.login__button}
        onPress={() => login({username, password})}>
        <Text>Login</Text>
      </TouchableOpacity>

      <NavLink
        text="Don't have an account? Click here to register"
        link="Register"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    margin: 5,
    marginTop: 20,
  },
  login__title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login_error: {
    color: '#c35',
  },
  login__button: {
    margin: 20,
    padding: 5,
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 30,
  },
});

export default LoginScreen;
