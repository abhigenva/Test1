import React from 'react';
import { ScrollView, StyleSheet, Text, Button, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content } from 'native-base';

export default class Wallet extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
      <Content>
      <ScrollView style={styles.container}>
        <Text>
          This is the Wallet Screen.
        </Text>
        <Button
          onPress={()=> {Alert.alert('Payment Successful!')}}
          title="Pay"/>
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
