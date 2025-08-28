
import Clipboard from '@react-native-clipboard/clipboard';
import { Platform, ToastAndroid } from 'react-native';

const copyToClipboard = async text => {
  console.log("texttexttext", text)
  try {
    await Clipboard.setString(text);
    // Toast.show('Copied.', Toast.SHORT);
    if (Platform.OS === "android") {
      console.log("android")
      ToastAndroid.show('Copied to clipboard', ToastAndroid.TOP);

    }
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