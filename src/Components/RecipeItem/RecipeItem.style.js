import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  recipe: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  image: {
    width: 90,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    marginLeft: 20,
    color: '#1c6547',
    fontSize: 25,
    fontWeight: '700',
    flexShrink: 1,
  },
  time: {
    color: '#1c6547',
    fontSize: 35,
    fontWeight: '700',
  },
  unit: {
    color: '#d7d7c0',
    fontSize: 27,
    fontWeight: '500',
  },
  rightContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
