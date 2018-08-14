import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
          <Text style={styles.heading}>Invites</Text>
        </Body>
      </Header>
      <Content>
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>Hello</Text>
        <Text>First Message.</Text>
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
