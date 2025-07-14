import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';
import { fontFamily } from '../../../constants/fonts';
import { hp, wp } from '../../../components/ResponsiveComponent';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: hp(3),
  },
});