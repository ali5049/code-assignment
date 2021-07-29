import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './FoodItem.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
function FoodItem({name}) {
  return (
    <View style={[styles.card]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View>
        <View style={styles.personsContainer}>
          <Icon color="white" size={30} name="person" />
        </View>
        <Text style={styles.count}>(2~3)</Text>
      </View>
    </View>
  );
}

export default FoodItem;
