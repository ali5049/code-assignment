import React from 'react';
import Offers from '../Containers/OffersScreen';
import RecipeScreen from '../Containers/RecipeScreen';
function Navigator(Stack) {
  return (
    <>
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
    </>
  );
}

export default Navigator;
