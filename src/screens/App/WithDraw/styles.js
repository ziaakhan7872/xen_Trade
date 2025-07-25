import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.withDrawContainer,
  },
  spacer: {
    flex: 1,
    minHeight: 80,
  },
});