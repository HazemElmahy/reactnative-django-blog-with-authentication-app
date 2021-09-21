import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation, route}) => {
  const {addBlogPost} = useContext(Context);
  return (
    <BlogPostForm
    labels={{
      header:"Create a new post",
      title:"Enter Title:",
      title_placeholder:"Enter title",
      body:"Enter Body",
      body_placeholder:"Enter body",
      button_text:"ADD NEW POST",
    }}
      onSubmit={(title, body) => {
        addBlogPost(title, body, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
