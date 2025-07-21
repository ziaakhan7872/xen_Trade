import { totalSize } from "react-native-dimension"

const fontFamily = {
    //Helvetica Now Display Fonts
    appTextLight: 'HelveticaNowDisplay-Light', // 300
    appTextRegular: 'HelveticaNowDisplay-Regular', // 400
    appTextMedium: 'HelveticaNowDisplay-Medium', // 500
    appTextSemiBold: 'HelveticaNowDisplay-Black', // 600
    appTextBold: 'HelveticaNowDisplay-Bold', // 700

    //Bomstad Display Fonts
    mainTextLight: 'BomstadDisplay-Light', // 300
    mainTextRegular: 'BomstadDisplay-Regular', // 400
    mainTextMedium: 'BomstadDisplay-Medium', // 500
    mainTextSemiBold: 'BomstadDisplay-SemiBold', // 600
    mainTextBold: 'BomstadDisplay-Bold', // 700
}

const fontSize = {
    h1: totalSize(4.5),
    h2: totalSize(4),
    h3: totalSize(3.5),
    h4: totalSize(3),
    h5: totalSize(2.4),
    h6: totalSize(2.2),
    large: totalSize(2),
    medium: totalSize(1.8),
    regular: totalSize(1.6),
    small: totalSize(1.25),
    tiny: totalSize(1)
}
export { fontSize, fontFamily } 