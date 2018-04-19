import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
          >
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Restaurants</Text>
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={1}
            >
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Swiping Up</Text>
              </View>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Profiles</Text>
              </View>
              <Swiper
                loop={false}
                index={1}
              >
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/image.png')} style={{width:400, height:400}}/>
                </View>
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/pr.png')} style={{width:400, height:400}}/>
                </View>
                <View style={styles.slideDefault}>
                  <Image source={require('../assets/images/cg.png')} style={{width:400, height:400}}/>
                </View>
              </Swiper>
              <View style={styles.slideDefault}>
                <Text style={styles.text}>Swiping Down</Text>
              </View>
            </Swiper>
            <View style={styles.slideDefault}>
              <Text style={styles.text}>Clubs</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }

});
