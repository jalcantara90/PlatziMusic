import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons'

import ArtistList from './ArtistList';
import HomeView from './HomeView';
import ArtistDetailView from  './ArtistDetailView';
import LoginView from  './LoginView';
import { getArtists } from './api-client';


class PlatziMusic extends React.Component {
  render() {

    const isAdnroid = Platform.OS === 'android';

    return <Router>
      <Scene key="login" component={LoginView} hideNavBar={true}/>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar={true}/>
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAdnroid}/>
      </Scene>
    </Router>
  }
}
AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);