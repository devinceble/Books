import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import {
  ListBooks,
} from '../components'
// import listBooks from '../data/books.json';
import api from '../lib/api';

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

  constructor(props) {
    super(props);
    this.state = {
      listBooks: [],
      fetchinglistBooks: false,
    };
  }

  async getListOfBooks() {
    this.setState({ fetchinglistBooks: true });
    const listBooks = await api.get('/Books');
    this.setState({ listBooks: listBooks.body, fetchinglistBooks: false });
  }

  componentDidMount() {
    this.getListOfBooks();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { listBooks } = this.state;
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
