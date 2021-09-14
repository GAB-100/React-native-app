import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../../constants/Colors';
import styles from './styles';

const SecondaryButton = (props) => {
  return (
    <TouchableOpacity
      style={{
      
        
        backgroundColor: Colors.secondary,
        ...styles.grdtContainer,
        ...props.style,
      }}
      // disabled={props.disabled ? props.disabled : false}
      onPress={props.onPress}>
    
        <Text style={styles.primaryText}>{props.text}</Text>
     
    </TouchableOpacity>
  );
};

export default SecondaryButton;
