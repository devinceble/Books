import React from 'react';
import {
  Button,
  View,
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Books',
      headerRight: (
        <Button
          title="Add Book"
          onPress={() => navigate('Create', { new: true })}
        />
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Edit Book"
          onPress={() =>
            navigate('Create', { new: false })
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
