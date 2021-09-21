import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput} from 'react-native';

const BlogPostForm = ({labels, init_values, onSubmit}) => {
  const [title, setTitle] = useState(init_values.title);
  const [body, setBody] = useState(init_values.body);

    return (
    <View>
      <Text style={styles.form__header}>{labels.header}</Text>
      <Text style={styles.form__text}>{labels.title}</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.form__input}
        placeholder={labels.title_placeholder}
      />
      <Text style={styles.form__text}>{labels.body}</Text>
      <TextInput
        value={body}
        onChangeText={text => setBody(text)}
        style={styles.form__input}
        placeholder={labels.body_placeholder}
        multiline={true}
      />
      <TouchableOpacity
        onPress={() => onSubmit(title, body)}
        style={styles.form__button}>
        <Text style={styles.form__button__text}>{labels.button_text}</Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
    init_values: {
    title: '',
    body: ''
    }
}

const styles = StyleSheet.create({
  form__header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  form__input: {
    borderColor: '#00000088',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  form__text: {
    marginLeft: 5,
  },
  form__button: {
    alignSelf: 'center',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#000000aa',
    borderColor: '#00000099',
    margin: 15,
  },
  form__button__text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default BlogPostForm;
