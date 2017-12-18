import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

class Book extends React.Component {
  render() {
    return (
      <View key={this.props.detail.ID} style={styles.container}>
        <View style={styles.content}>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {this.props.detail.Title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
          >
            {this.props.detail.Description}
          </Text>
          <Text
            style={styles.pageCount}
          >
            {this.props.detail.PageCount} Pages
          </Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Edit"
            onPress={() =>
              this.props.onEdit(this.props.detail)
            }
          />
          <Button
            title="Delete"
            color="red"
            onPress={() => {
              Alert.alert(
                'Delete Book',
                this.props.detail.Title,
                [
                  {text: 'Cancel'},
                  {text: 'Delete', onPress: () => this.props.onDelete(this.props.detail)},
                ],
                { cancelable: true }
              );
            }}
          />
        </View>
      </View>
    )
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


export default Book;
