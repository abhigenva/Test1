import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Separator, Text, Header, Title, Body } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
      <Header>
      <Body>
        <Text>Notifications</Text>
      </Body>
      </Header>
      <Content>
      <ScrollView style={styles.container}>
        <Text>Waiting for a Match ?</Text>
      </ScrollView>
      </Content>
      </Container>
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
