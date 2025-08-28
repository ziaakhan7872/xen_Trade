
import Clipboard from '@react-native-clipboard/clipboard';
import { ToastAndroid } from 'react-native';



const copyToClipboard = async text => {
  try {
    await Clipboard.setString(text);
    // Toast.show('Copied.', Toast.SHORT);

    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  } catch (error) { }
};
const copyToClipboardNotoast = async text => {
  try {
    await Clipboard.setString(text);
  } catch (error) { }
};

const fetchCopiedText = async () => {
  try {
    const text = await Clipboard?.getString();
    return text;
  } catch (error) {
    return null;
  }
};

export const copyPaste = {
  copy: copyToClipboard,
  paste: fetchCopiedText,
  copynoToast: copyToClipboardNotoast
};