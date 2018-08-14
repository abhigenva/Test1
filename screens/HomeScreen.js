import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
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
              <Spinner color='red'/>
                <Ellipse cx="50%" cy="100%" rx="150" ry="100" stroke="orange" strokeWidth="7" fill="#fefefe"/>
                <Circle cx="25%" cy="88%" r="20" fill="orange" onPressIn={() => {Alert.alert('Test for Press in')}}/>
                <Circle cx="50%" cy="85%" r="24" fill="orange" />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={require('../assets/images/Restron.png')} style={{width: wp('10%'), height: hp('10%')}}/>
                <Image source={require('../assets/images/Heart.png')}/>
                <Image source={require('../assets/images/Club.png')} style={{width: wp('10%'), height: hp('10%')}}/>
                </View>
                <Circle cx="75%" cy="88%" r="20" fill="orange" onPressOut={() => {Alert.alert('Test for Press out')}} />
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
                  <Image source={require('../assets/images/image.png')} style={{width:'100%', height:'60%'}}/>

                  <Text style={styles.info}>Norah Anderson, 23</Text>

                </View>
                <View style={styles.slideDefault}>
                    <Image source={require('../assets/images/pr.png')} style={{width:'100%', height:'60%' }}/>
                </View>
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/cg.png')} style={{width:'100%', height:'60%'}}/>
                </View>

              </Swiper>
              <View style={styles.slideDefault}>

                <Svg
                  height="100%"
                  width="100%"
                >
                <Text style={styles.text}>Creating Animation</Text>
                <Spinner color='black'/>
                  <Ellipse cx="50%" cy="100%" rx="150" ry="100" stroke="orange" strokeWidth="7" fill="#fefefe"/>
                  <Circle cx="25%" cy="88%" r="20" fill="orange" onPressIn={() => {Alert.alert('Test for Press in')}} />
                  <Circle cx="50%" cy="85%" r="24" fill="orange" />
                  <Circle cx="75%" cy="88%" r="20" fill="orange" onPressOut={() => {Alert.alert('Test for Press out')}} />
                </Svg>
              </View>

            </Swiper>
            <View style={styles.slideDefault}>

              <Svg
                height="100%"
                width="100%"
              >
              <Text style={styles.text}>Clubs</Text>
              <Spinner color='blue' />
                <Ellipse cx="50%" cy="100%" rx="150" ry="100" stroke="orange" strokeWidth="7" fill="#fefefe"/>
                <Circle cx="25%" cy="88%" r="20" fill="orange" onPressIn={() => {Alert.alert('Test for Press in')}} />
                <Circle cx="50%" cy="85%" r="24" fill="orange" />
                <Circle cx="75%" cy="88%" r="20" fill="orange" />
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
  }

});
