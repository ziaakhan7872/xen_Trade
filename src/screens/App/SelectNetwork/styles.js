
import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';
import { fontFamily } from '../../../constants/fonts';
import { hp, wp } from '../../../components/ResponsiveComponent';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingTop: hp(1),
    width: '100%',
    alignItems: 'stretch',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
  },
});