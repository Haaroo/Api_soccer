import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const image = {uri: 'https://i.pinimg.com/564x/21/7b/e8/217be8ebb62ed4956ef2a4aade4abc87.jpg'};

export default class registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.titulo}>MEJORES GOLES DEL MUNDIAL</Text>
      <Video
          style={styles.video}
          source={{
            uri: 'https://emmanuelharo.000webhostapp.com/mundial.mp4',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    image: 'center',
  },
  container: {
    flex: 1,
  },
  video: {
    alignSelf: 'center',
    flex:1,
    width: 350,
    height: 400,
  },
  titulo: {
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
});