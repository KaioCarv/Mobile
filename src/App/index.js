import { PixelRatio, SafeAreaView, Text, View, useWindowDimensions } from "react-native";

import { styles } from "./styles";

export default function App() {

 const {
  fontScale,
  height,
  width,
  scale}
  = useWindowDimensions();

  const orientation = width > height ? 'landscape' : 'portrait'

  return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>
            Font scale: {fontScale}
          </Text>
          <Text>
            dimenções: {width}x{height}
          </Text>
          <Text>
            Pixel Ratio: {scale}
          </Text>
          <Text>
            Orientation: {orientation}
          </Text>
          <Text>
             {PixelRatio.get()}
          </Text>
          <Text>
             {PixelRatio.getFontScale()}
          </Text>
          <Text>
             {PixelRatio.getPixelSizeForLayoutSize(100)}
          </Text>
          <Text>
             {PixelRatio.roundToNearestPixel(8.44)}
          </Text>
        </View>
      </SafeAreaView>   
  );
}
