import { TextInput } from 'react-native';
import { styles } from './styles';
import React, { useState, forwardRef } from 'react';

/**
 * 
 * @type  {React.FC<import('react-native').TextInputProps>}  
 * 
 */

  export const TextArea = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return(
    <TextInput
    ref={ref}
    style={[
     styles.textarea, 
     isFocused && styles.textareaFocused,
   ]}
    placeholderTextColor="#aaa"
   onFocus={() => setIsFocused(true)}
   onBlur={()=> setIsFocused(false)}
   textAlignVertical="top"
   {...props}
   multiline
  //  onContentSizeChange={(event) => {
  //   console.log(event.nativeEvent.contentSize.height)
  //  }}
    />
  )
});