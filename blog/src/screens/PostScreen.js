import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const PostScreen = ({route}) => {
  const id = route.params.id;
  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <Text style={styles.blog__title}>{blogPost.title}</Text>
      <Text style={styles.blog__body}>{blogPost.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blog__title: {
    fontSize:15,
    fontWeight: 'bold',
    margin: 15,
    letterSpacing: 1.5,
    marginBottom: 0,
  },
  blog__body: {
    margin: 15,
  }
});

export default PostScreen;
