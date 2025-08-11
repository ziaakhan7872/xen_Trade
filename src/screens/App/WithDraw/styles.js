import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.withDrawContainer,
  },
  spacer: {
    flex: 1,
    minHeight: 130,
  },
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0,0,0,0.2)', // light overlay
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 20,
  },
  closeButtonContainer: {
    // backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },

});