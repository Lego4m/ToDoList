import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',

    elevation: 2,
    shadowColor: '#000',
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    lineHeight: 20,
  },
  checkButton: {
    padding: 3,
  },
  trashButton: {
    padding: 10,
    borderRadius: 4,
  }
});
