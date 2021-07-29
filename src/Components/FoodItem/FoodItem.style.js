import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: '70%',
    flexShrink: 1,
  },

  title: {
    color: '#996633',
    fontSize: 25,
    fontWeight: '700',
  },
  count: {
    color: '#5a5a5a',
    fontSize: 20,
    fontWeight: '700',
  },
  personsContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#5a5a5a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
