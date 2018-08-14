import React from 'react';
import { ScrollView, StyleSheet, Button, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Separator, Text, Header, Title, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Wallet extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
      <Header>
        <Body>
          <Text style={styles.heading}>Wallet</Text>
        </Body>
      </Header>
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
  heading: {
    fontWeight: 'bold',
    fontSize: hp('5%'),
  }
});
