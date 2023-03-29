import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorMode } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import uuid from 'react-native-uuid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from '../components/toast';
import { useUserContext } from '../context/useUserContext';
import { enumSchemas } from '../database/enumSchemas';
import { getRaelm } from '../database/realm';
import { DetalhesExercicio } from '../module/detalhesExercicio';
import { Evolute } from '../module/evolute';
import { Exercise } from '../module/exercise';
import { ListExercise } from '../module/exercise/lista';
import { Home } from '../module/home';
import { Settings } from '../module/settings';
import { Training } from '../module/training';
import { TrainerDetalhes } from '../module/training/trainerdetalhes';
import { backgroundColor, colorFooter, colorIconFooter, colorPrimary } from '../styles';

export function BottomTabNavigator() {
  const Stack = createNativeStackNavigator();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = useColorScheme() === 'dark';
  const { toastError, toastSucess } = Toast();
  const { stateUser, dispatch } = useUserContext();

  async function inicio() {
    const realm = await getRaelm();

    try {
      let userNew = {};
      const users = realm.objects(enumSchemas.USER_APLICATION).toJSON();

      if (users.length == 0) {
        userNew = { ...stateUser };
        delete userNew.exercicios;
        realm.write(() => {
          userNew._id = uuid.v4();
          userNew.dataNascimento = new Date();
          realm.create(enumSchemas.USER_APLICATION, userNew);
        });
        userNew.exercicios = [];
        dispatch({ type: 'new', payload: userNew });
      } else {
        userNew = { ...users[0] };
        userNew.exercicios = realm.objects(enumSchemas.TREINO_EXERCIC).toJSON();
        dispatch({ type: 'update', payload: userNew });
      }
      // realm.close();
    } catch (error) {
      console.error(error);
      toastError('Algo deu errado ao salvar');
      realm.close();
    }
  }

  useEffect(() => {
    isDarkMode ? toggleColorMode() : () => {};
    inicio();
  }, []);

  const Tab = createBottomTabNavigator();

  function HomeStack() {
    return (
      <Stack.Navigator
        initialRouteName="Homes"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: colorPrimary,
          },
          headerTitleStyle: {
            color: backgroundColor,
          },
          headerShown: false,
        })}
      >
        <Stack.Screen name="Homes" component={Home} />
        <Stack.Screen name="Exercicio" component={Exercise} />
        <Stack.Screen name="Config" component={Settings} />
        <Stack.Screen name="Treino" component={Training} />
        <Stack.Screen name="Detalhes exercício" component={DetalhesExercicio} />
      </Stack.Navigator>
    );
  }

  function ExercicioStack() {
    return (
      <Stack.Navigator
        initialRouteName="Exercicios"
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Exercicios" component={Exercise} />
        <Stack.Screen name="Lista Exercicio" component={ListExercise} />
      </Stack.Navigator>
    );
  }

  function TreinoStack() {
    return (
      <Stack.Navigator
        initialRouteName="Treinos"
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Treinos" component={Training} />
        <Stack.Screen name="Detalhes do treino" component={TrainerDetalhes} />
        <Stack.Screen name="Exercicios" component={Exercise} />
        <Stack.Screen name="Lista Exercicio" component={ListExercise} />
      </Stack.Navigator>
    );
  }

  return (
    <>
      {stateUser.exercicios.length == 0 ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'grid' : 'grid-outline';
                  break;

                case 'Exercicio':
                  iconName = focused ? 'barbell' : 'barbell-outline';
                  break;

                case 'Treino':
                  iconName = focused ? 'clipboard' : 'clipboard-outline';
                  break;

                case 'Config':
                  iconName = focused ? 'settings' : 'settings-outline';
                  break;

                default:
                  iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colorPrimary,
            tabBarInactiveTintColor: colorIconFooter,
            tabBarStyle: {
              backgroundColor: colorFooter,
              height: 60,
              paddingBottom: 4,
            },
            headerStyle: {
              backgroundColor: colorPrimary,
            },
            headerTitleStyle: {
              color: 'transparent',
            },
            // headerBackground: ({ focused, color, size }) => {
            //   return (
            //     <View style={style.view}>
            //       {/* <Button style={style.button} title="dfdf" /> */}
            //       <Text style={style.text}>{route.name}</Text>
            //       {route.name != "Config" &&
            //         <TouchableOpacity>
            //           <Icon name="pluscircleo" size={35} color={backgroundColor} style={{ marginRight: 10 }} />
            //         </TouchableOpacity>
            //       }
            //     </View>
            //   );
            // },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Exercicio" component={ExercicioStack} />
          <Tab.Screen name="Treino" component={TreinoStack} />
          <Tab.Screen name="Evolução" component={Evolute} />
          <Tab.Screen name="Config" component={Settings} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Exercicios"
          screenOptions={({ route }) => ({
            headerShown: false,
          })}
        >
          <Stack.Screen name="Exercicios" component={Exercise} />
          <Stack.Screen name="Lista Exercicio" component={ListExercise} />
        </Stack.Navigator>
      )}
    </>
  );
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colorPrimary,
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: '20%',
  },
  text: {
    textAlign: 'center',
    // marginRight:30,
    // fontSize: '25',
    fontWeight: 'bold',
    color: backgroundColor,
  },
});
