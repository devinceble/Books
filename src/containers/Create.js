import React from 'react';
import { Button } from 'react-native';

class CreateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const { params } = state;
    return {
      title: params.new ? 'Add Book' : 'Edit Book',
    }
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Book Listings"
        onPress={() =>
          goBack(null)
        }
      />
    );
  }
}

export default CreateScreen;
