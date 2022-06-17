import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Order } from '../screens/Order';
import { Profile } from '../screens/Profile';
import { StartOrder } from '../screens/StartOrder';
import { CustomDrawer } from '../components/CustomDrawer';
import { theme } from '../global/styles/theme';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return(
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.dark,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerInactiveBackgroundColor: theme.colors.secundaryMais,
        drawerInactiveTintColor: theme.colors.light,

        drawerStyle:{
          width: '70%',
          backgroundColor: theme.colors.secundaryMais
        },

        drawerItemStyle:{
          width: '85%',
          alignSelf: 'center',
          borderRadius: 8,
        },

        drawerLabelStyle:{
          fontSize: 19,
          fontFamily: theme.fonts.title,
          marginLeft: -25,
        }
      }}
    >
      <AppDrawer.Screen 
        name="Home" 
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Feather
              name="file-text"
              color={color}
              size={24}
            />
          ),
        }}
      />   
      <AppDrawer.Screen 
        name="Beer" 
        component={Order}
        options={{
          drawerIcon: ({color}) => (
            <Feather
              name="file-plus"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <AppDrawer.Screen 
        name="Profile" 
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Feather
              name="user"
              color={color}
              size={24}
            />
          ),
        }}
      />      
      <AppDrawer.Screen 
        name="StartOrder"
        component={StartOrder}  
        options={{
          drawerLabel: () => null
        }}
      />             
                        
    </AppDrawer.Navigator>
    );
}