import React from 'react';
import {
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import Book from './Book';

const PAGE = Dimensions.get('window');

class ListBooks extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.scroll}
        data={this.props.listBooks}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>
          <Book
            detail={item}
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    height: PAGE.height,
  }
});

export default ListBooks;
