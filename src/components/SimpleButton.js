import { TouchableOpacity, ActivityIndicator, View } from "react-native";
import { appStyles } from "../utilities";
import { colors, fontFamily } from "../constants";
import { hp, wp } from "./ResponsiveComponent";
import { ResponsiveText } from "./ResponsiveText";

export const SimpleButton = ({
    onPress,
    text,
    loading,
    backgroundColor,
    textColor,
    buttonWidth,
    styleView,
    disabled,
    fontWeight,
    fontSize,
    borderWidth,
    borderColor,
    alignSelf,
    borderRadius,
    btnImage,
    plus
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            disabled={disabled}
            style={styleView ? styleView :
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: alignSelf,
                    borderRadius: borderRadius ?? wp(16.5),
                    width: buttonWidth ? buttonWidth : wp(90),
                    height: hp(7),
                    backgroundColor: backgroundColor,
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                }
            }
            onPress={onPress}>
            {loading ?

                <ActivityIndicator size={'large'} color={colors.darkBlue} /> :
                <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    {btnImage ?
                        <Image source={btnImage} resizeMode="contain" style={styles.btnImage} />
                        : null}
                    <ResponsiveText
                        style={{
                            fontSize: 14,
                            fontFamily: fontFamily.appTextMedium,
                            color: textColor ? textColor : colors.white,
                            textAlign: 'center'
                        }}>
                        {text}
                    </ResponsiveText>
                </View>

            }
        </TouchableOpacity>
    );
}