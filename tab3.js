import React, { Component } from 'react';
import { View, Text, FlatList,Image,Item, StyleSheet,ImageBackground,TextInput,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const image = {uri: 'https://i.pinimg.com/564x/35/13/64/35136433572cb160508aa613254805a5.jpg'};

export default class TAB3 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lista:[],
    };
  }

  render() {
    const search = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var temp = xhttp.responseText;
          var datos = JSON.parse(temp);
          this.setState({ lista: datos.response });
        }
      };
      xhttp.open("GET", "https://emmanuelharo.000webhostapp.com/estadios.php?country="+this.state.country, true);
      xhttp.send();
    };

    return (
      <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <Text style={styles.titulo}>ESTADIOS DEL MUNDO</Text>
       <TextInput placeholder = "Escribe un pais"
            style={styles.input}
            keyboardType="number-text"
            onChangeText={(country) => this.setState({ country })}
          />
        <View style={styles.btn}>  
        <Button title="Send" onPress={search} color='black'></Button>
        </View>
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.content} >{item.venue.name}</Text>
              <Text style={styles.content1}>{item.venue.address}</Text>
              <Image source={{ uri: item.venue.image }} style={{width: 150, height:150}} resizeMode='stretch' />
            </View>
          )}
          keyExtractor={(item) => item.response}
        />
         </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
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
  btn:{
    marginTop:40,
    width:100,
    height:50,
    marginLeft:150,
  },
  textContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 34,
    lineHeight: 44,
    color: '#555',
    textAlign: 'center',
    flex: 1,
  },
  content1: {
    fontSize: 24,
    lineHeight: 44,
    color: '#555',
    textAlign: 'center',
    flex: 1,
    fontStyle: 'italic',
  },
   image: {
    flex: 1,
    image: 'center',
  },
});

