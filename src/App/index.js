import {
  Image,
  SafeAreaView,
  View,
} from "react-native";

import { useState } from "react";
import { Button } from "../Components/Button";
import { styles } from "./styles";

export default function App() {
const [isBlurred, setIsBlurred] = useState(true);
const [isLoading, setIsLoading] = useState(true);
const [hasError, setHasError] = useState(false);
 return(
  <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={{position: "relative"}}>
          {isLoading && (
            <Image
             source={{
              uri: 'https://placeholde.co/300x150.png?text=Carregando...',
             }}
             style={{
              position: 'absolute',
              zIndex: 2,
              height: 300,
              width: 150,
              borderRadius: 20,
              overlayColor: "#fff"
            }}
            />
          )}
          {hasError && (
            <Image
             source={{
              uri: 'https://placeholde.co/300x150.png?text=Error!',
             }}
             style={{
              position: 'absolute',
              zIndex: 2,
              height: 300,
              width: 150,
              borderRadius: 20,
              overlayColor: "#fff"
            }}
            />
          )}
          <Image  
            source={{
              uri: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
               
            }}
            alt="Carro lindo"
            style={{
              height: 300,
              width: 150,
              borderRadius: 20,
              // backgroundColor: "purple",
              overlayColor: "#fff"
            }}
            resizeMode="cover"
            blurRadius={ 
              isBlurred ? 50 : 0
            }
            defaultSource={require('../images/image-placeholder.png')}
            
            onLoadStart={() => {
              setIsLoading(true);
            }}
            onLoad={() => {
              setIsLoading(false);           
            }}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            onProgress={(event) => {
             const {loaded, total} = event.nativeEvent;
             const percentege = Math.round((loaded / total) * 100);
             console.log(`Ja carregou ${percentege}%`)
            }}
          />
          </View>
          <Button onPress={() => {
           setIsBlurred(!isBlurred)
          }}>
            {isBlurred ? 'Mostrar Imagem' : 'Borrar imagem'}
          </Button>
        </View>
    </SafeAreaView>
  );
}
