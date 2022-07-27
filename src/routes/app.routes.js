import React, { useContext } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from '../contexts/auth';
import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { Opine } from '../screens/Opine';
import { Order } from '../screens/Order';
import { AddCam } from '../screens/AddCam';
import { Control } from '../screens/Control';
import { Profile } from '../screens/Profile';
import { Register } from '../screens/Register';
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
      {
      user && user.useType == "Administrador" ?
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
      :
        <AppDrawer.Screen 
          name="Reservar" 
          component={Home}
          options={{
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons 
                name="cart-plus" 
                color={color}
                size={24} 
              />
            ),
          }}
        />
      }   
      {
      user && user.useType == "Administrador" ?
        <AppDrawer.Screen 
          name="Beer" 
          component={Register}
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
          name="Reservados"
          component={Order}
          options={{
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons 
                name="cart-outline" 
                color={color} 
                size={24} 
              />
            ),
          }}
        />  
      } 
      {
      user && user.useType == "Administrador" ?
        <AppDrawer.Screen 
          name="Control" 
          component={Control}
          options={{
            drawerIcon: ({color}) => (
              <Feather
                name="archive"
                color={color}
                size={24}
              />
            ),
          }}
        />      
      :
        <AppDrawer.Screen 
          name="Perfil" 
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
      }
      
      <AppDrawer.Screen 
        name="StartOrder"
        component={StartOrder}  
        options={{
          drawerLabel: () => null
        }}
      /> 
      <AppDrawer.Screen 
        name="Opinar"
        component={Opine}  
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