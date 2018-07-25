import React from 'react';
import { ScrollView, StyleSheet, ListView, View } from 'react-native';
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
            <Text>Settings</Text>
          </Body>
        </Header>
        <Content>
        <View style={styles.container}>
        <Text>Waiting for a Match ?</Text>
        </View>
        </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,

  },
});
