import React from 'react';
import {
  Button,
  View,
  Alert,
  RefreshControl,
} from 'react-native';
import {
  ListBooks,
} from '../components'
// import listBooks from '../data/books.json';
import api from '../lib/api';
let self;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    self = this;
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
        this.getListOfBooks();
      } else {
        Alert.alert('Failed to a Delete Book.');
      }
    }).catch((error) => {
      console.warn(error)
    });
  }

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Books',
      headerRight: (
        <Button
          title="Add Book"
          onPress={() => navigate('Create', { new: true, refresh: () => { self.getListOfBooks(); } })}
        />
      ),
    };
  };

  componentDidMount() {
    this.getListOfBooks();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { listBooks } = this.state;
    return (
      <View>
        <ListBooks
          refreshControl={
            <RefreshControl
              refreshing={this.state.fetchinglistBooks}
              onRefresh={this.getListOfBooks.bind(this)}
            />
          }
          listBooks={listBooks}
          onEdit={(data) => {
            navigate('Create', { new: false, data, refresh: () => { self.getListOfBooks(); } });
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
