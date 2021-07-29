import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 170,
  },
  heading: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1c6547',
    marginBottom: 20,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 5,
  },
  text: {
    fontSize: 18,
    color: '#5a5a5a',
    fontWeight: '500',
  },
});
