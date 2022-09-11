import { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { styles } from './styles';

interface TaskProps {
  completed: boolean;
  task: string;
}

export function Task({ completed, task }: TaskProps) {
  const [inCheckHighlight, setInCheckHighlight] = useState(false);
  const [inDanger, setInDanger] = useState(false);

  return (
    <View 
      style={[
        styles.container,
        completed ? 
          ({ borderColor: '#262626' }) : 
          ({ borderColor: '#333333' })
      ]}
    >
      <TouchableHighlight
        style={styles.checkButton}
        onPress={() => {}}
        underlayColor='transparent'
        onShowUnderlay={() => setInCheckHighlight(true)}
        onHideUnderlay={() => setInCheckHighlight(false)}
      >
        {
          completed ? (
            <MaterialCommunityIcons 
              name='checkbox-marked-circle' 
              size={24} 
              color={inCheckHighlight ? '#8284FA' : '#5E60CE'}
              
            />
          ) : (
            <MaterialCommunityIcons
              name='checkbox-blank-circle-outline' 
              size={24}
              color={inCheckHighlight ? '#1E6F9F' : '#4EA8DE'}
            />
          )
        }
      </TouchableHighlight>

      <Text 
        style={[
          styles.text,
          completed ? ({
            color: '#808080',
            textDecorationLine: 'line-through'
          }) : ({
            color: '#f2f2f2'
          })
        ]}
      >
        {task}
      </Text>

      <TouchableHighlight
        style={styles.trashButton}
        underlayColor='#333333'
        onPress={() => {}}
        onShowUnderlay={() => setInDanger(true)}
        onHideUnderlay={() => setInDanger(false)}
      >
        <Feather 
          name='trash-2' 
          size={22} 
          color={inDanger ? '#E25858' : '#808080'} 
        />
      </TouchableHighlight>
    </View>
  )
}