/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground style={styles.picture} source={{uri: 'https://globalmedicalco.com/photos/globalmedicalco/26/126853.jpg'}}>
          <View style={styles.container}>
            <Image style={styles.logo} source={{uri: 'https://via.placeholder.com/150x150'}}></Image>
            <Text style={styles.heading}>Doctor en tu Casa </Text>
          </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50
  },
  heading: {
    marginTop: 50,
    color: 'white',
    fontSize: 30,
    fontWeight: '900'
  }
});
