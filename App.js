import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import imagem from './assets/imagens/eco-light-off.png';
import imagemUm from './assets/imagens/eco-light.png';
import imagemDois from './assets/imagens/logo-dio-white.png';
import imagemTres from './assets/imagens/logo-dio.png';


const App = () => {
  const [toggle, setToggle] = useState(false); 

  const handleChangeToggle = () => setToggle (oldToggle => !oldToggle);


  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(()=> (
      setToggle (oldToggle => !oldToggle)
    ));
    return() => subscription.remove();
  }, []);
  

  return (

    <View style = {toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress = {handleChangeToggle}>
      <Image style = {toggle ? style.lightingOn : style.lightingOff} source={toggle ? imagemUm : imagem}/>
      <Image style = {style.dioLogo} source={toggle ? imagemTres : imagemDois}/>
      </TouchableOpacity>
    </View>
  )
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple", 
    alignItems: "center",
    justifyContent: "center",
  },
  containerLight:{
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  lightingOn: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 150,
    height: 150,
  },

  dioLogo:{
    resizeMode: "contain",
    alignSelf: "center",
    width: 200,
    height: 200,
    marginTop: 50,
  }

  }
)