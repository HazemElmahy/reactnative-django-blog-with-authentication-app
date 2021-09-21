import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as BlogProvider} from './src/context/BlogContext';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingScreen from './src/screens/LoadingScreen';
import IndexScreen from './src/screens/IndexScreen';
import PostScreen from './src/screens/PostScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import AccountScreen from './src/screens/AccountScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {navigationRef} from './src/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({navigation}) => ({
            title: 'Index Page',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#422234',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Create');
                }}>
                <Icon
                  style={{alignSelf: 'center'}}
                  name="plus-square"
                  size={30}
                  color="#422232"
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: '#000',
                  padding: 20,
                  backgroundColor: '#44400022',
                }}
                onPress={() => {
                  navigation.navigate('Account');
                }}></TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({navigation, route}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Edit', {id: route.params.id});
                }}>
                <Icon name="edit" size={30} color="#422232" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </AuthProvider>
  );
};
