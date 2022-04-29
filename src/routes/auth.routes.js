import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { AppRoutes } from '../routes/app.routes';

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'}
      }}
    >
      <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen 
        name="SignUp"
        component={SignUp}   
      />     
      <AuthStack.Screen 
        name="AppRoutes"
        component={AppRoutes}   
      />
    </AuthStack.Navigator>
  );
}