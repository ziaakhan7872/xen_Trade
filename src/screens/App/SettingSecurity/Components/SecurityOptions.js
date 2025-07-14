import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { wp, hp } from '../../../../components/ResponsiveComponent';
import images from '../../../../images';
import { appStyles } from '../../../../utilities';
import { colors, fontFamily } from '../../../../constants';

const SecurityOptions = ({ label, rightArrow, isEnabled, setIsEnabled, toggleText, onPress }) => {

    const handleToggle = () => {
        const newValue = !isEnabled
        setIsEnabled(newValue)
        // onToggle?.(newValue)
    };

    return (
        <View>
            {rightArrow ?
                <>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.optionCard, appStyles.row]} onPress={onPress}>
                        <ResponsiveText style={styles.optionText}>{label}</ResponsiveText>
                        <TouchableOpacity activeOpacity={0.8} onPress={onPress} >
                            <Image source={rightArrow} resizeMode='contain' style={styles.rightArrow} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </>
                :
                <View style={[styles.optionCard, appStyles.row]}>
                    <ResponsiveText style={styles.optionText}>{toggleText}</ResponsiveText>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => handleToggle()}>
                        <Image
                            source={isEnabled ? images.toggleSwitchOn : images.toggleSwitchOff}
                            style={styles.toggleImage}
                        />
                    </TouchableOpacity>
                </View>
            }
        </View >
    );
};

export default SecurityOptions;



const styles = StyleSheet.create({
    optionCard: {
        backgroundColor: colors.cardsBgColor,
        padding: wp(4.5),
        borderRadius: wp(3),
        borderColor: colors.cardBorderColor,
        borderWidth: 1.5,
    },
    optionDirection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 15.5,
        fontFamily: fontFamily.appTextMedium,
    },
    rightArrow: {
        width: wp(5),
        height: wp(5),
        tintColor: colors.white,
        resizeMode: 'contain',
    },
    toggleImage: {
        width: wp(10),
        height: wp(6),
        resizeMode: 'contain',
    },
});
