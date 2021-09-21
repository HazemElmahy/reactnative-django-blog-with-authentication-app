import React, {useState, useContext} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({route, navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  const post_id = route.params.id;

  const blogPost = state.find(blogPost => blogPost.id === post_id);

  return (
    <BlogPostForm
      labels={{
        header: 'Edit post',
        title: 'Enter new Title:',
        title_placeholder: 'Enter title',
        body: 'Enter new Body',
        body_placeholder: 'Enter body',
        button_text: 'EDIT POST',
      }}
      init_values={{
        title: blogPost.title,
        body: blogPost.body,
      }}
      onSubmit={(title, body) => {
        editBlogPost(post_id, title, body, () => navigation.pop())
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
