import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#38861b',
    height: 70,
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 27,
    color: 'white',
    fontWeight: '700',
  },
  tab: {
    borderLeftWidth: 1,
    borderColor: '#59b33b',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  tabActive: {
    borderLeftWidth: 1,
    borderColor: '#59b33b',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#97ce00',
    borderBottomWidth: 7,
  },
});
