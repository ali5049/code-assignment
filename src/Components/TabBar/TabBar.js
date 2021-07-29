import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './TabBar.style';

function TabBar({onTabPress, tab1, tab2, tab3}) {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => onTabPress(1)} style={styles.tabActive}>
        <Text style={styles.title}>{tab1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress(2)} style={styles.tab}>
        <Text style={styles.title}>{tab2}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress(3)} style={styles.tab}>
        <Text style={styles.title}>{tab3}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TabBar;
