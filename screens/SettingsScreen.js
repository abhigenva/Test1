import React from 'react';
import { ScrollView, StyleSheet, ListView, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Separator, Text, Header, Title, Body } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    render() {
    return (
        <Container>
        <Header>
          <Body>
            <Text style={styles.heading}>Settings</Text>
          </Body>
        </Header>
        <Content>
        <View style={styles.container}>
        <Text>Hello Settings.</Text>
        </View>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <ResponsiveImage source={{uri: 'https://reactjs.org/logo-og.png'}} initWidth="138" initHeight="138"/>
          <ResponsiveImage source={{uri: 'https://reactjs.org/logo-og.png'}} initWidth="138" initHeight="138"/>
          <ResponsiveImage source={{uri: 'https://reactjs.org/logo-og.png'}} initWidth="138" initHeight="138"/>
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
  heading: {
    fontWeight: 'bold',
    fontSize: hp('5%'),

  }
});
