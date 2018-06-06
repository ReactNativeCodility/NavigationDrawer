import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text, YellowBox } from 'react-native';

import StyleIndex from '../../css/StyleIndex';
 
export default class HomeActivity extends Component {
 
    constructor(props) {
      super(props);

      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);
    }
   
     render()
     {
        return(
           <View style = { StyleIndex.Container}>
   
              <Text style={{fontSize: 23}}> This is HomeActivity. </Text>
            
           </View>
        );
     }
  }