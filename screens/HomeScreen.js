import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  FlatList,
  ListItem,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Container, Content, Spinner, Input, Icon, Item, Button, Text, Header } from 'native-base';
import Swiper from 'react-native-swiper';
import Svg, {
  Circle,
  Ellipse,
} from 'react-native-svg';
import { Permissions, Camera } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <Container>
        <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        </Header>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            animated={true}
          >
            <View style={styles.slideDefault}>
              <Svg
                height="100%"
                width="100%"
              >
              <Text style={styles.text}>Restaurants</Text>
              <Text style={styles.text}>Loading...</Text>
              <Circle cx="50%" cy="50%" r="5%" fill="#ff9933" onPressOut={() => {Alert.alert('Test for Press out')}} />
              <Spinner color='red'/>
                <Ellipse cx="50%" cy="100%" rx="38%" ry="15%" stroke="#ff9933" strokeWidth="7%" fill="#fefefe"/>
                <ResponsiveImage source={require('../assets/images/Restron.png')} initWidth="50" initHeight="50" style={{position: "absolute", top:"85%", left:"19%"}}/>
                <Circle cx="25%" cy="88%" r="3%" fill="#ff9933" onPressIn={() => {Alert.alert('Test for Press in')}}/>
                <ResponsiveImage source={require('../assets/images/Heart.png')} initWidth="50" initHeight="50" style={{position:"absolute", top:"82%", left:"44%"}}/>
                <Circle cx="50%" cy="85%" r="3%" fill="#ff9933" onPressIn={() => {Alert.alert('Test for Press in')}}/>
                <ResponsiveImage source={require('../assets/images/Club.png')} initWidth="50" initHeight="50" style={{position:"absolute", top:"85%", left:"69%"}}/>
                <Circle cx="75%" cy="88%" r="3%" fill="#ff9933" onPressOut={() => {Alert.alert('Test for Press out')}} />
              </Svg>
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={0}
              animated={true}
            >
              <Swiper
                loop={false}
                index={0}
                showsPagination={false}
                animated={true}
              >
                <View style={styles.slideDefault}>
                  <ResponsiveImage source={require('../assets/images/image.png')} initWidth="400" initHeight="400"/>
                  <Text style={styles.info}>Norah, 23</Text>
                </View>
                <View style={styles.slideDefault}>
                    <ResponsiveImage source={require('../assets/images/pr.png')} initWidth="400" initHeight="400"/>
                </View>
                <View style={styles.slideDefault}>
                  <ResponsiveImage source={require('../assets/images/cg.png')} initWidth="400" initHeight="400"/>
                </View>
              </Swiper>
              <View style={styles.slideDefault}>
                <Svg
                  height="100%"
                  width="100%"
                >
                  <Text style={styles.text}>Creating Animation</Text>
                  <Spinner color='black'/>
                  <Ellipse cx="50%" cy="100%" rx="38%" ry="15%" stroke="#ff9933" strokeWidth="7%" fill="#fefefe"/>
                  <ResponsiveImage source={require('../assets/images/Restron.png')} initWidth="50" initHeight="50" style={{position: "absolute", top:"85%", left:"19%"}}/>
                  <Circle cx="25%" cy="88%" r="3%" fill="#ff9933" onPressIn={() => {Alert.alert('Test for Press in')}}/>
                  <ResponsiveImage source={require('../assets/images/Heart.png')} initWidth="50" initHeight="50" style={{position:"absolute", top:"82%", left:"44%"}}/>
                  <Circle cx="50%" cy="85%" r="3%" fill="#ff9933" onPressIn={() => {Alert.alert('Test for Press in')}}/>
                  <ResponsiveImage source={require('../assets/images/Club.png')} initWidth="50" initHeight="50" style={{position:"absolute", top:"85%", left:"69%"}}/>
                  <Circle cx="75%" cy="88%" r="3%" fill="#ff9933" onPressOut={() => {Alert.alert('Test for Press out')}} />
                </Svg>
              </View>
            </Swiper>
            <View style={styles.slideDefault}>
              <Svg
                height="100%"
                width="100%"
              >
              <Text style={styles.text}>Clubs</Text>
              <View style={styles.container}>
              <FlatList
                data={[
                  {key: 'Devin'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
              </View>
              <Ellipse cx="50%" cy="100%" rx="38%" ry="15%" stroke="#ff9933" strokeWidth="7%" fill="#fefefe"/>
              <ResponsiveImage source={require('../assets/images/Restron.png')} initWidth="50" initHeight="50" style={{position: "absolute", top:"85%", left:"19%"}}/>
              <Circle cx="25%" cy="88%" r="3%" fill="#ff9933" onPressIn={() => {Alert.alert('Test for Press in')}}/>
              <ResponsiveImage source={require('../assets/images/Heart.png')} initWidth="50" initHeight="50" style={{position:"absolute", top:"82%", left:"44%"}}/>
              <Circle cx="50%" cy="85%" r="3%" fill="#ff9933" onPressIn={() => {Alert.alert('Test for Press in')}}/>
              <ResponsiveImage source={require('../assets/images/Club.png')} initWidth="50" initHeight="50" style={{position:"absolute", top:"85%", left:"69%"}}/>
              <Circle cx="75%" cy="88%" r="3%" fill="#ff9933" onPressOut={() => {Alert.alert('Test for Press out')}} />
              </Svg>
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  slideDefault:{
    flex: 1,
    paddingTop: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fefefe'
  },
  text:{
    color: 'black',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  info:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'orange',
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: hp('3%'),
    height: 44,
  },

});
