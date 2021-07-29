import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Actions.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
function Actions({}) {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.button}>
        <Icon color="white" size={30} name="event" />
        <Text style={styles.buttonTitle}>Add to Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon color="white" size={30} name="shopping-cart" />
        <Text style={styles.buttonTitle}>Add to items list</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Actions;
