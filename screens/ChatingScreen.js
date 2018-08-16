import React from 'react';
import { ScrollView, StyleSheet, Alert, Animated, Image, Easing } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Separator, Text, Header, Title, Body, Badge } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(){
    super();
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount(){
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <Container>
      <Header>
      <Body>
        <Text style={styles.heading}>
          Notifications
        </Text>
      </Body>
      </Header>
      <Content>
      <ScrollView style={styles.container}>
        <Text>Waiting for a Match ?</Text>
        <Animated.Image
          style={{
            width: wp('10%'),
            height: hp('5%'),
            transform: [{rotate: spin}]
          }}
          source={require('../assets/images/Restron.png')}/>
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
    fontSize: hp('5%'),
  }

});
