import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import PickImage from './screen/camera.js'
export default class App extends React.Component{
  render(){
    return(
      <PickImage/>
    )
  }
}