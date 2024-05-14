import {
  Image,
  SafeAreaView,
  View,
} from "react-native";

import carro from "../images/carro.jpg";
import { styles } from "./styles";

export default function App() {

 return(
  <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Image  
            source={carro}
            alt="Carro lindo"
            style={{
              height: 300,
              width: 300,
            }}
          />
        </View>
    </SafeAreaView>
  );
}
