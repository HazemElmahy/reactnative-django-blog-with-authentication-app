import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import {Context as AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);
  const {state: authState} = useContext(AuthContext);

  console.log('autotoatoa ', authState);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });

    return listener;
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Post', {id: item.id})}>
              <View style={styles.post}>
                <Text style={styles.post__text}>
                  {item.id} - {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Icon name="trash" size={33} color="#000" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blog__button: {},
  post: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  post__text: {
    flex: 1,
    fontSize: 17,
  },
});

export default IndexScreen;
