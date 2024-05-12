import { SafeAreaView, View, Modal, Text, StatusBar } from "react-native";

import { styles } from "./styles";
import { Button } from "../Components/Button";
import { useState } from "react";

export default function App() {
const [visible, setVisible] = useState(false)

 return(
  <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
         <Button onPress={() => setVisible(true)}>
           Abrir Modal
         </Button>
        </View>
    
 

    <Modal
    animationType="fade"
    visible={visible}
    statusBarTranslucent
    transparent
    >
 <StatusBar barStyle='light-content' animated/>

     <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
      <Text style={{marginBottom: 16}}>
        Este é o conteudo do Modal!
      </Text>

      <Button
       style={{paddingHorizontal: 20,}}
       onPress={() => setVisible(false)}
       >
        Fechar
      </Button>
      </View>
     </View>
    </Modal>
    </SafeAreaView>
  );
}
