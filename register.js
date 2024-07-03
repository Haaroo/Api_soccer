import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';


const image = {uri: 'https://i.pinimg.com/564x/87/fd/c9/87fdc9037c55b95a835aa3b1eba680a4.jpg'};

export default class registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var1: '',
      var2: '',
      var3: '',
      res: '',
      datos: ''
    };
  }

  render() {
      const validacion = () => {
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          _this.setState({ res: xhttp.responseText });
        }
      };
      xhttp.open("GET","https://emmanuelharo.000webhostapp.com/registro.php?var1="+this.state.var1+"&var2="+this.state.var2+"&var3="+this.state.var3,true );
      xhttp.send();
    };
    return (
      <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.titulo}> REGISTRO </Text>
        <TextInput placeholder = "Nombre"
          style={styles.input}
          keyboardType="number-text"
          onChangeText={(var1) => this.setState({ var1 })}
        />
        <TextInput placeholder = "Correo"
          style={styles.input}
          keyboardType="number-text"
          onChangeText={(var2) => this.setState({ var2 })}
        />
        <TextInput placeholder = "Contraseña"
          style={styles.input}
          keyboardType="number-text"
          onChangeText={(var3) => this.setState({ var3 })}
        />
          <View style={styles.btn}>
            <Button title="Validar" onPress={validacion} color = 'black'></Button>
            <Text> {this.state.res} </Text>
          </View>
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  titulo:{
    fontSize:30,
    textAlign:"center",
    marginTop:40,
    color:"#1C2833",
    fontWeight: 'bold',
  },
  btn: {
    borderColor: 'black',
    marginTop: 20,
    width: 180,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    image: 'center',
  },
  container: {
    flex: 1,
  },
});