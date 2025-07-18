import { totalSize } from "react-native-dimension"

// const fontFamily = {
//     appTextLight: 'Pretendard-Light', // 300
//     appTextRegular: 'Pretendard-Regular', // 400
//     appTextMedium: 'Pretendard-Medium', // 500
//     appTextSemiBold: 'Pretendard-SemiBold', // 600
//     appTextBold: 'Pretendard-Bold', // 700
//     zenDotRegular: 'ZenDots-Regular'
// }

const fontFamily = {
    //Helvetica Now Display Fonts
    appTextLight: 'HelveticaNowDisplay-Light', // 300
    appTextRegular: 'HelveticaNowDisplay-Regular', // 400
    appTextMedium: 'HelveticaNowDisplay-Medium', // 500
    appTextSemiBold: 'HelveticaNowDisplay-Black', // 600
    appTextBold: 'HelveticaNowDisplay-Bold', // 700

    //Bomstad Display Fonts
    mainTextLight: 'Bomstad Display Light', // 300
    mainTextRegular: 'Bomstad Display Regular', // 400
    mainTextMedium: 'Bomstad Display Medium', // 500
    mainTextSemiBold: 'Bomstad Display SemiBold', // 600
    mainTextBold: 'Bomstad Display Bold', // 700
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