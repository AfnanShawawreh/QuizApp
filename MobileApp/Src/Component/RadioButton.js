import React, { useState } from 'react';
import { View, Text, TouchableHighlight ,StyleSheet} from 'react-native';


export default function RadioButton({ data, onValueChange }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {

    onValueChange(value);
    setUserOption(value);
  };
  return (
    <View>
      {data.map((item) => {
        return (
          <TouchableHighlight 
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            key={item.value}
            onPress={() => selectHandler(item.value)}>
            <Text style={styles.option}> {item.value}</Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
    option: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
    },
    unselected: {
      backgroundColor: '#FF9AAE',
      margin: 5,
    },
    selected: {
      backgroundColor: '#e35b77',
      margin: 6,
      padding: 10,
      borderRadius: 10,
    },
  });