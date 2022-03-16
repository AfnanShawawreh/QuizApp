import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const IconButton = ({ onPress, icon, backgroundColor ,size}) => (
    <View style={styles.iconButtonContainer}>
      <Icon.Button
      size={50}
        name={icon}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={styles.iconButton}
      >
      
      </Icon.Button>
    </View>
  );
  export default IconButton;
  const styles = StyleSheet.create({
    iconButton: {
    padding: 12,
    size:300,
    backgroundColor:'FF9AAE'
  },
  
  iconButtonContainer: {
    paddingHorizontal: 12,
  },
});