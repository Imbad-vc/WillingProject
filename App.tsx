/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { appStyles } from "./styles/appStyles";
import WLButton from './components/WLButton/WLButton';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <View style={appStyles.directionContainer}>
          <WLButton 
          onPress={()=>{

          }} 
          source={require('./assest/ctrl_top_normal.png')}
          />
          <View style={{flexDirection:"row",justifyContent:'space-between',width:'100%'}}>
            <WLButton 
            onPress={()=>{

            }} 
            source={require('./assest/ctrl_left_normal.png')}
            />
            <WLButton 
            onPress={()=>{

            }} 
            source={require('./assest/ctrl_right_normal.png')}
            />
          </View>
          <WLButton 
          onPress={()=>{

          }} 
          source={require('./assest/ctrl_down_normal.png')}
          />
        </View>
    </SafeAreaView>
  );
}


export default App;

