import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Task } from '../../components/Task';

import { styles } from './styles';

import { AddTask } from '../../components/AddTask';

import Logo from '../../assets/Logo.svg';
import Clipboard from '../../assets/Clipboard.svg';

type Task = {
  id: number,
  task: string,
  completed: boolean,
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = tasks.reduce((acc, task) => {
    return task.completed ? acc + 1 : acc;
  }, 0);

  function handleAddTask(taskText: string) {
    const task = {
      id: (tasks[tasks.length - 1]?.id ?? -1) + 1,
      task: taskText,
      completed: false,
    }

    setTasks([...tasks, task]);
  }

  function handleToggleTask(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id ?
        ({ ...task, completed: !task.completed }) :
        task
    );

    setTasks(newTasks);
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.tasksContainer}>
        <AddTask onAddTask={handleAddTask} />

        <View style={styles.tasksInformationsContainer}>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoText, { color: '#4EA8DE' }]}>
              Criadas
            </Text>

            <Text style={styles.infoTextCounter}>
              {tasks.length}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoText, { color: '#8284FA' }]}>
              Concluídas
            </Text>

            <Text style={styles.infoTextCounter}>
              {completedTasks}
            </Text>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => 
            <Task 
              task={item} 
              onToggle={handleToggleTask} 
              onDeleteTask={handleDeleteTask} 
            />
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