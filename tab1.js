import React, { Component } from 'react';
import { View, Text, FlatList,Image,Item, StyleSheet,ImageBackground,TextInput,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const image = {uri: 'https://i.pinimg.com/564x/35/13/64/35136433572cb160508aa613254805a5.jpg'};


export default class TAB1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lista:[],
    };
  }
  
      componentDidMount() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var temp = xhttp.responseText;
          var datos = JSON.parse(temp);
          this.setState({ lista: datos.response });
        }
      };
      xhttp.open("GET", "https://emmanuelharo.000webhostapp.com/leagues.php", true);
      xhttp.send();
    }

render() {

    return (
      
      <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titulo} >LIGAS</Text>
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.content} >{item.league.name}</Text>
              <Text style={styles.content1}>{item.league.type}</Text>
              <Image style={{width: 120, height:120}} resizeMode='stretch' source={{ uri: item.league.logo }} />
            </View>
          )}
          keyExtractor={(item) => item.response}
        />
        </ImageBackground>
      </View>
      
    )} 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontWeight:'bold',
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

