import React, {useEffect} from 'react';
import {SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native';
import {styles} from './OffersScreen.style';
import {Header, TabBar, RecipeItem} from '../../Components';

import {connect} from 'react-redux';
import {getFoodsAction} from '../../Redux/FoodRedux/actions';
const Offers = ({getFoods, food}) => {
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <SafeAreaView style={styles.safarea}>
      <Header
        title={'Offers for You'}
        leftIcon="menu"
        rightIcon="replay"
        leftIconPressed={() => {}}
        rightIconPressed={() => getFoods()}
      />
      <TabBar
        tab1="Recipes"
        tab2="Items"
        tab3="Foods"
        onTabPress={(tab) => alert(`Tab ${tab} pressed`)}
      />
      <View style={styles.container}>
        {food?.loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={food?.foods}
            renderItem={({item}) => (
              <RecipeItem title={item?.title} time={item?.time} />
            )}
            refreshing={food?.loading}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    food: state.food,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFoods: () => dispatch(getFoodsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
