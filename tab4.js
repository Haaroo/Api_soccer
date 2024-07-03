import React, { Component } from 'react';
import { View, Text, FlatList,Image,Item, StyleSheet,ImageBackground,Button,TouchableOpacity,Styles } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const image = {uri: 'https://i.pinimg.com/564x/c4/a5/6b/c4a56bdbff9c50acb3fa865763513030.jpg'};


export default class TAB4 extends Component {
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
    xhttp.open("GET", "https://emmanuelharo.000webhostapp.com/jugadores.php", true);
    xhttp.send();
  }
  
  render() {
    const jugadas = () =>{
      this.props.navigation.navigate("JUGADAS");
    }
    return (
      
      <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titulo}>MEJORES JUGADORES DEL MUNDIAL</Text>
        <FlatList
          data={this.state.lista}
          renderItem={({ item }) => (
            <View style={styles.textContainer} >
              <Text style={styles.content} >{item.player.name}</Text>
              <Text style={styles.content} >{item.player.nationality}</Text>
              <Image source={{ uri: item.player.photo }} style={{width: 150, height:150}} resizeMode='stretch' />
            </View>
          )}
          keyExtractor={(item) => item.response}
        />
        <Button title="Jugadas mundial 2022" onPress={jugadas} color = 'black'></Button>
         </ImageBackground>
      </View>
    );
  }
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
  },
   image: {
    flex: 1,
    image: 'center',
  },
});

