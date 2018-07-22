import React from 'react';
import { ScrollView, StyleSheet, ListView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Spinner, Input, Icon, Item, Button, Text, Header } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,

  };
    render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
        <Content>
        <Text>Waiting for a Match ?</Text>
        </Content>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
