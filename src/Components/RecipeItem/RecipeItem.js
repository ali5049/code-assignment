import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './RecipeItem.style';
import {Pizza} from '../../assets';
import {useNavigation} from '@react-navigation/native';

function RecipeItem({title, time}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RecipeScreen')}
      style={styles.recipe}>
      <View style={styles.leftContainer}>
        <Image source={Pizza} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.unit}>mins.</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RecipeItem;
