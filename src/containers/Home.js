import React from 'react';
import {
  Button,
  View,
  Alert,
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

  async deleteBook(data) {
    const { goBack } = this.props.navigation;
    api.del(`/Books/${data.ID}`).then((json) => {
      if (json.status === 200) {
        Alert.alert(`${data.Title} Deleted`);
      } else {
        Alert.alert('Failed to a Delete Book.');
      }
    }).catch((error) => {
      console.warn(error)
    });
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
            this.deleteBook(data);
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
