import { useState } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

export function AddTask() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor='#808080'
        style={[
          styles.input,
          isFocused ? 
            ({ borderColor: '#5E60CE' }) : 
            ({ borderColor: '#0D0D0D' })
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <TouchableHighlight
        style={styles.button}
        underlayColor='#4EA8DE'
        onPress={() => {}}
      >
        <AntDesign name='pluscircleo' size={16} color='#f2f2f2' />
      </TouchableHighlight>
    </View>
  )
}