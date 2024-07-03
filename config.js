import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //LIBRERIAS DE NAVEGACION
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //LIBRERIAS DE NAVEGACION
import VENTANA1 from './login';//EXPORTAMOS LAS VENTANAS DEL PROYECTO
import VENTANA2 from './register';
import VENTANA3 from './welcome';
import VENTANA4 from './jugadas';



export default class Configuracion extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator(); //DECLARAR STACK
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="INICIO" component={VENTANA1} /> 
          <Stack.Screen name="REGISTRO" component={VENTANA2} />
          <Stack.Screen name="BIENVENIDA" component={VENTANA3} options={{
            headerLeft:()=> <></>,

            }} />
            <Stack.Screen name="JUGADAS" component={VENTANA4} />
        </Stack.Navigator>                                                            
      </NavigationContainer>
    );
  }
}

