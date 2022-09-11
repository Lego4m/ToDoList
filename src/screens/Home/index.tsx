import { View, Text, FlatList } from 'react-native';

import { Task } from '../../components/Task';

import { styles } from './styles';

import { AddTask } from '../../components/AddTask';

import Logo from '../../assets/Logo.svg';
import Clipboard from '../../assets/Clipboard.svg';

const tasks: { id: number, task: string, completed: boolean }[] = [
  {
    id: 0,
    completed: false,
    task: 'Codar',
  },
  {
    id: 1,
    completed: true,
    task: 'Estudar',
  },
]

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.tasksContainer}>
        <AddTask />

        <View style={styles.tasksInformationsContainer}>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoText, { color: '#4EA8DE' }]}>
              Criadas
            </Text>

            <Text style={styles.infoTextCounter}>
              0
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoText, { color: '#8284FA' }]}>
              Concluídas
            </Text>

            <Text style={styles.infoTextCounter}>
              0
            </Text>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => 
            <Task completed={item.completed} task={item.task} />
          }
          ListEmptyComponent={() => (
            <View style={styles.taskListEmptyContainer}>
              <Clipboard />
              <Text 
                style={[
                  styles.taskListEmptyText,
                  { marginTop: 16, fontWeight: 'bold' }
                ]}
              >
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={styles.taskListEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}