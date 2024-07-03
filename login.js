import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Alert,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const image = {uri: 'https://emmanuelharo.000webhostapp.com/4403ab10e8d9fab198a395508958d96b.png'};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      resultado: 'Usuario no valido',
    };
  }

  render() {

    const Log = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          _this.setState({ resultado: xhttp.responseText });
          if (xhttp.responseText != "1"){
        _this.props.navigation.navigate("BIENVENIDA", {email:_this.state.email});
      }else{
        alert("Usuario o correo no registrado");
      }
        }
      };
      xhttp.open("GET","https://emmanuelharo.000webhostapp.com/login.php?email="+this.state.email+"&password="+this.state.password+"",true );
      xhttp.send();
    };

    const Validacion = () =>{
      this.props.navigation.navigate("REGISTRO");
    }
    return (
      <View style={styles.container}>
      <Text style={styles.futbol}> FUTBOL SOCCER </Text>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <Text style={styles.titulo}> LOGIN </Text>
          <TextInput placeholder = "Email"
            style={styles.input}
            keyboardType="number-text"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput placeholder = "Password"
            style={styles.input}
            keyboardType="number-text"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={styles.btn}>
          <Button title="INGRESAR" onPress={Log} color = 'black'></Button>
          </View>
          
          <TouchableOpacity style={styles.newreg} onPress={Validacion}>
          <Text > Registrarte... </Text>
          </TouchableOpacity>
          </ImageBackground>
      </View>
    );
  }
  }


const styles = StyleSheet.create({
  input:{
    borderWidth: 1.5,
    borderColor: 'black',
    color: 'black',
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  titulo:{
    fontSize:50,
    textAlign:"center",
    marginTop: -100,
    color:"black",
    fontWeight: 'bold',
  },
  futbol:{
    textAlign: 'center',
  },
  btn:{
    marginTop: 20,
    width: 180,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  newreg:{
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});