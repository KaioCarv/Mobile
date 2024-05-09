import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";

/**
 * @param {import('react-native').PressableProps} props 
*/

export function Button({
   children, 
   disabled, 
   ...props 
  }) {
  return (
    <View style={styles.ButtonWrapper}> 
      <Pressable 
       android_ripple={{ color: "#447" }}
       disabled={disabled}
       style={({pressed}) => [
       styles.button,
       pressed && styles.buttonActive,
       disabled && styles.disebledButtom,
     ]}
     {...props}
      >
        <Text style={[
          styles.buttonLabel,
         disabled && styles.buttonLabelDisabled 
        ]}
        >{children}
        </Text>
      </Pressable>
    </View>
  );
}
