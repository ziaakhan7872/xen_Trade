import { TouchableOpacity, ActivityIndicator, View } from "react-native";
import { ResponsiveText } from "../screens/Auth/Welcome/Components/ResponsiveText";
import { wp } from "../screens/Auth/Welcome/Components/ResponsiveComponent";
import { appStyles } from "../utilities";
import { colors, fontFamily } from "../constants";

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
                    paddingVertical: 8,
                    borderRadius: borderRadius ?? 8,
                    width: buttonWidth ? buttonWidth : wp(43),
                    height: wp(11),
                    backgroundColor: backgroundColor,
                    borderWidth: borderWidth,
                    borderColor: borderColor
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
                            fontSize: 20,
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