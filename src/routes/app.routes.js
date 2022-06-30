import React, { useContext } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../contexts/auth';
import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { Order } from '../screens/Order';
import { AddCam } from '../screens/AddCam';
import { Profile } from '../screens/Profile';
import { StartOrder } from '../screens/StartOrder';
import { CustomDrawer } from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  const { user } = useContext(AuthContext);
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
      {
      user && user.useType == "Administrador" ?
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
      :
        <AppDrawer.Screen
          name="Beer"
          component={Order}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: {
              height: 0,
            }
          }}
        />  
      } 
 
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
      <AppDrawer.Screen
          name="AddCam"
          component={AddCam}
          options={{
            drawerLabel: () => null
          }}
      />                
                        
    </AppDrawer.Navigator>
    );
}