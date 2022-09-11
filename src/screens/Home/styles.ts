import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    backgroundColor: '#0d0d0d',
    paddingTop: 24,
    paddingBottom: 70,
    alignItems: 'center',
  },
  tasksContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  tasksInformationsContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontWeight: 'bold',
  },
  infoTextCounter: {
    backgroundColor: '#333333',
    color: '#d9d9d9',
    fontSize: 12,
    fontWeight: 'bold',

    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
  },
  taskList: {
    marginTop: 20,
  },
  taskListEmptyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    alignItems: 'center',
  },
  taskListEmptyText: {
    textAlign: 'center',
    lineHeight: 20,
    color: '#808080'
  },
});
