import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const isSigned = useSelector(state => state.auth.signed);
  const user = useSelector(state => state.user.profile);

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1877F2',
          },
          headerTintColor: '#fff',
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          tabBarInactiveBackgroundColor: '#1F1F1F',
          tabBarActiveBackgroundColor: '#1F1F1F',
        }}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: `Olá, ${user.name_user}`,
            headerTitleContainerStyle: {
              marginBottom: 140,
            },
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: '500',
            },
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#1877F2',
              height: 263,
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
            },
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="ad-units" size={20} color="#FFF" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: `${user.name_user}`,
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: () => <Icon name="person" size={20} color="#FFF" />,
          }}
        />
        <Tab.Screen
          name="New"
          component={SelectProvider}
          options={({ navigation }) => ({
            title: 'Selecione o prestador',
            tabBarLabel: 'Agendar',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}>
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),

            tabBarIcon: () => (
              <Icon name="add-circle-outline" size={20} color="#FFF" />
            ),
          })}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {isSigned ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectDateTime"
              component={SelectDateTime}
              options={({ navigation }) => ({
                title: 'Selecione o horário',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
                headerTransparent: true,
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon name="chevron-left" size={20} color="#FFF" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="Confirm"
              component={Confirm}
              options={({ navigation }) => ({
                title: 'Confirme seu agendamento',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
                headerTransparent: true,
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon name="chevron-left" size={20} color="#FFF" />
                  </TouchableOpacity>
                ),
              })}
            />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: 'SignUp Page',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default Routes;
