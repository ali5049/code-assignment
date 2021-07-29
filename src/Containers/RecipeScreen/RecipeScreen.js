import React from 'react';
import {SafeAreaView, View, Image, Text, FlatList} from 'react-native';
import {styles} from './RecipeScreen.style';
import {Header, FoodItem, Actions} from '../../Components';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Food} from '../../assets';
const RecipeScreen = ({}) => {
  const navigation = useNavigation();
  const ingredients = [
    {
      name: 'Potato',
      quiantity: '50g',
    },
    {
      name: 'Onion',
      quiantity: '10g',
    },
    {
      name: 'Tomottato',
      quiantity: '20g',
    },
    {
      name: 'Chilli',
      quiantity: '5g',
    },
    {
      name: 'Black paper',
      quiantity: '30g',
    },
    {
      name: 'Mint',
      quiantity: '15g',
    },
    {
      name: 'Oil',
      quiantity: '60g',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Recipe"
        leftIcon="chevron-left"
        rightIcon="save-alt"
        leftIconPressed={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Image source={Food} style={styles.image} />
        <FoodItem name="An awesome recipe to cook" />
        <Actions name="An awesome recipe to cook" />
        <Text style={styles.heading}>Ingredients</Text>
        <FlatList
          data={ingredients}
          renderItem={({item}) => (
            <View style={styles.ingredient}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.quiantity}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen);
