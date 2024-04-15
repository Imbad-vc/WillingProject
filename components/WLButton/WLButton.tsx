
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { appStyles } from '../../styles/appStyles';
 
const WLButton = ({ onPress, source }) => (
  <TouchableOpacity onPress={onPress} style={appStyles.buttonStyle}>
    <Image source={source} />
  </TouchableOpacity>
);
 
export default WLButton;