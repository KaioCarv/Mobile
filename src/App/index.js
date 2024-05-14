import { ImageBackground, SafeAreaView, View } from "react-native";

import { useState } from "react";
import { Button } from "../Components/Button";
import { styles } from "./styles";

export default function App() {
  const [isBlurred, setIsBlurred] = useState(true);

  return (
    <ImageBackground 
    style={{ flex: 1 }}
    source={require('../images/carro.jpg')} 
       imageStyle={{
        // tintColor: '#f00'
       }}
        blurRadius={isBlurred ? 50 : 0}
      >
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Button onPress={() => {setIsBlurred(!isBlurred);}}>
            {isBlurred ? "Mostrar Imagem" : "Borrar imagem"}
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
