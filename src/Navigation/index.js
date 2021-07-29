import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FoodsStack from './FoodsStack';

export const SignedOutStack = createStackNavigator();

const SignedOutContainer = memo(() => {
  return (
    <SignedOutStack.Navigator
      headerMode="none"
      screenOptions={{cardStyle: {backgroundColor: '#f9f9de'}}}>
      {FoodsStack(SignedOutStack)}
    </SignedOutStack.Navigator>
  );
});

const RootStack = function App() {
  const _renderNavigationContent = () => {
    return <SignedOutContainer />;
  };
  console.log('navigator', _renderNavigationContent);
  return (
    <NavigationContainer>{_renderNavigationContent()}</NavigationContainer>
  );
};

export default RootStack;
