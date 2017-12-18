import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import {
  ListBooks,
} from '../components'
import listBooks from '../data/books.json';

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
        <ListBooks
          listBooks={listBooks}
          onEdit={(data) => {
            navigate('Create', { new: false, data });
          }}
          onDelete={(data) => {
            console.warn('Delete', data);
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
