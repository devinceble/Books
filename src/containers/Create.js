import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

class CreateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const { params } = state;
    return {
      title: params.new ? 'Add Book' : `${params.data.Title}`,
    }
  };

  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    const { params } = state;
    this.state = {
      ID: !params.new ? params.data.ID : '',
      Title: !params.new ? params.data.Title : '',
      Description: !params.new ? params.data.Description : '',
      PageCount: !params.new ? params.data.PageCount : '',
      Excerpt: !params.new ? params.data.Excerpt : '',
      PublishDate: !params.new ? params.data.PublishDate : '',
      New: params.new,
    };
  }
  render() {
    const { goBack } = this.props.navigation;
    const { New, ID, Title, Description, PageCount, Excerpt, PublishDate } = this.state;
    return (
      <View>
        <TextInput
          placeholder="Book ID"
          style={[styles.container, styles.textInput]}
          onChangeText={(value) => this.setState({ ID: value })}
          value={ID.toString()}
        />
        <TextInput
          placeholder="Title"
          style={[styles.container, styles.textInput]}
          onChangeText={(value) => this.setState({ Title: value })}
          value={Title}
        />
        <TextInput
          placeholder="Description"
          multiline
          style={[styles.container, styles.textInput, { height: 200 }]}
          onChangeText={(value) => this.setState({ Description: value })}
          value={Description}
        />
        <TextInput
          placeholder="Page Count"
          style={[styles.container, styles.textInput]}
          onChangeText={(value) => this.setState({ PageCount: value })}
          value={PageCount.toString()}
        />
        <Button
          title={New ? 'Add Book' : 'Edit Book'}
          onPress={() =>
            goBack(null)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginBottom: 0,
    padding: 16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  textInput: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 4,
    fontSize: 14,
  },
  pageCount: {
    paddingTop: 4,
  },
  button: {
    paddingLeft: 4,
    flexShrink: 1,
  }
});

export default CreateScreen;
