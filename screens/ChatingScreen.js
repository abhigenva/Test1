import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Separator, Text, Header, Title, Body, Badge } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
      <Header>
      <Body>
        <Text style={styles.heading}>Notifications</Text>
      </Body>
      </Header>
      <Content>
      <ScrollView style={styles.container}>
        <Text>Waiting for a Match ?</Text>
        <Badge success>
        <Text>Match Found!!</Text>
        </Badge>
        <Text>For more information tap below.</Text>
        <Badge info>
        <Text onPress={() => {Alert.alert('No info found.')}}>Information.</Text>
        </Badge>
        <Text>No matches found!!</Text>
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
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
  }

});
