import React from 'react';
import { View } from 'react-native';
import styles from '../styles';
const { BgRed, fContainer, BgBlue, BgGreen, dNone, flex1, justify } = styles;

const Pallet = (props) => {
  return (
    <View style={[fContainer, props.goals.length ? '' : dNone]}>
      <View style={[BgRed, flex1, justify]}></View>
      <View style={[BgBlue, flex1, justify]}></View>
      <View style={[BgGreen, flex1, justify]}></View>
    </View>
  );
};

export default Pallet;
