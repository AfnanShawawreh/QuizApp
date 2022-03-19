import React from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, View,
} from 'react-native';
import IconButton from '../Component/IconButton'
const Home = ({ navigation }) => {
  const onPress = () => { navigation.navigate('Quiz') }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>
        Get Ready for
      </Text>
     
        <Text style={styles.title1}>
          Quiz Time
        </Text>
        <IconButton icon="rightcircle" backgroundColor="#FF9AAE" onPress={onPress} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFEAEA',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#FF9AAE',
    marginVertical: 2,
    alignSelf: 'center',

  },
  title1: {

    fontSize: 60,
    fontWeight: '700',
    color: '#FF9AAE',
    alignSelf: 'center',
  },

});

export default Home;
