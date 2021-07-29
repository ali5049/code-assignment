import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    backgroundColor: '#97ce00',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#709900',
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexShrink: 1,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
    flexShrink: 1,
    textAlign: 'center',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginLeft: 10,
  },
});
