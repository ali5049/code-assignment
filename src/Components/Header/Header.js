import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Header.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function Header({
  title,
  leftIcon,
  rightIcon,
  leftIconPressed,
  rightIconPressed,
}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={leftIconPressed}>
        <Icon name={leftIcon} size={40} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={rightIconPressed}>
        <Icon name={rightIcon} size={40} color={'white'} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
